"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import type { LatLngExpression, LatLngBoundsLiteral } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { FlatLocation } from "./LocationsInteractiveMapSection";

/** ── Marker icon fix ─────────────────────────────────────────────────────── */
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

type MaybeImage = string | { src: string };
const toUrl = (u: MaybeImage): string => (typeof u === "string" ? u : u.src);

const DefaultIcon = L.icon({
    iconRetinaUrl: toUrl(iconRetinaUrl as unknown as MaybeImage),
    iconUrl: toUrl(iconUrl as unknown as MaybeImage),
    shadowUrl: toUrl(shadowUrl as unknown as MaybeImage),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;
/* ─────────────────────────────────────────────────────────────────────────── */

L.Map.addInitHook(function () {
    // @ts-expect-error internal flag still respected
    this.options.preferCanvas = true;
});

/** Safe map checks */
function isMapReady(map: L.Map | undefined | null): map is L.Map {
    if (!map) return false;
    // Accessing private fields is okay here for runtime safety; guard with ts-ignore.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const m: any = map;
    return !!m._loaded && !!m._mapPane && !!map.getCenter;
}

/** Throttled clamp using rAF — attaches only after 'load' to avoid _leaflet_pos errors */
function useThrottledClamp(map: L.Map, bounds: L.LatLngBounds, minZoom: number) {
    const tickingRef = useRef(false);

    useEffect(() => {
        let mounted = true;

        const clamp = () => {
            if (!mounted) return;
            if (tickingRef.current) return;
            tickingRef.current = true;

            requestAnimationFrame(() => {
                tickingRef.current = false;

                if (!mounted || !isMapReady(map)) return;

                // All calls below are now safe
                const within = bounds.contains(map.getCenter());
                const tooFarOut = map.getZoom() < minZoom;

                if (!within || tooFarOut) {
                    map.panInsideBounds(bounds, { animate: true, duration: 0.3 });
                    if (tooFarOut) map.setZoom(minZoom + 1, { animate: true });
                }
            });
        };

        const attach = () => {
            if (!mounted) return;
            map.on("dragend", clamp);
            map.on("moveend", clamp);
            map.on("zoomend", clamp);
            // initial clamp after load
            clamp();
        };

        // Attach after the map has finished loading its first view
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const alreadyLoaded = (map as any)._loaded;
        if (alreadyLoaded) {
            attach();
        } else {
            map.once("load", attach);
        }

        return () => {
            mounted = false;
            map.off("dragend", clamp);
            map.off("moveend", clamp);
            map.off("zoomend", clamp);
        };
    }, [map, bounds, minZoom]);
}

function EnforceIndia({
    bounds,
    minZoom,
}: {
    bounds: L.LatLngBounds | LatLngBoundsLiteral;
    minZoom: number;
}) {
    const map = useMap();

    useEffect(() => {
        const lb = bounds instanceof L.LatLngBounds ? bounds : L.latLngBounds(bounds);

        const apply = () => {
            if (!isMapReady(map)) return;
            map.setMaxBounds(lb);
            map.options.minZoom = minZoom;
            map.fitBounds(lb, { padding: [20, 20], maxZoom: Math.max(minZoom + 1, 5) });
        };

        // Ensure we only call once the map is ready
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((map as any)._loaded) apply();
        else map.once("load", apply);
    }, [map, bounds, minZoom]);

    const lb = bounds instanceof L.LatLngBounds ? bounds : L.latLngBounds(bounds);
    useThrottledClamp(map, lb, minZoom);
    return null;
}

function InvalidateOnResize() {
    const map = useMap();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // Set to true after the component is mounted in the client

        if (typeof window === "undefined") {
            return;
        }

        let mounted = true;

        const invalidate = () => {
            if (!mounted || !map) return;
            map.invalidateSize({ animate: false });
        };

        // Kick a few times after mount to cover transitions/layout shifts
        invalidate();
        const t1 = setTimeout(invalidate, 50);
        const t2 = setTimeout(invalidate, 200);
        const t3 = setTimeout(invalidate, 500);

        // Guard container existence (can be undefined during unmount)
        const container = map?.getContainer?.();
        let ro: ResizeObserver | undefined;
        if (container) {
            ro = new ResizeObserver(invalidate);
            ro.observe(container);
        }

        const onVisibility = invalidate;
        window.addEventListener("orientationchange", onVisibility);
        window.addEventListener("resize", onVisibility);

        return () => {
            mounted = false;
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            ro?.disconnect();
            window.removeEventListener("orientationchange", onVisibility);
            window.removeEventListener("resize", onVisibility);
        };
    }, [map]);

    // Only render the component on the client
    if (!isClient) {
        return null;
    }

    return null;
}

export default function LocationsLeafletMapInnerSection({
    locations,
    center,
    bounds,
    height = 420,
    minZoom = 4,
    maxZoom = 12,
    className = "",
}: {
    locations: FlatLocation[];
    center: LatLngExpression;
    bounds: L.LatLngBounds | LatLngBoundsLiteral;
    height?: number;
    minZoom?: number;
    maxZoom?: number;
    className?: string;
}) {
    const lb = useMemo(
        () => (bounds instanceof L.LatLngBounds ? bounds : L.latLngBounds(bounds)),
        [bounds]
    );

    const markerNodes = useMemo(
        () =>
            locations.map((loc, i) => (
                <Marker key={`${loc.name}-${loc.lat}-${loc.lng}-${i}`} position={[loc.lat, loc.lng]}>
                    <Popup>
                        <div className="text-sm">
                            <div className="font-medium text-slate-900">{loc.name}</div>
                            {loc.type && <div className="text-slate-600">{loc.type}</div>}
                            {loc.link && (
                                <a className="text-indigo-600 underline" href={loc.link}>
                                    View details
                                </a>
                            )}
                        </div>
                    </Popup>
                </Marker>
            )),
        [locations]
    );

    return (
        <div className={className} style={{ height }}>
            <MapContainer
                center={center}
                zoom={Math.max(minZoom + 1, 5)}
                minZoom={minZoom}
                maxZoom={maxZoom}
                scrollWheelZoom
                style={{ height: "100%", width: "100%" }}
                className="rounded-2xl"
                maxBounds={lb}
                maxBoundsViscosity={1.0}
                zoomControl
                // valid Map options
                preferCanvas
                zoomAnimation
                fadeAnimation
                markerZoomAnimation={false}
                wheelPxPerZoomLevel={180}
            >
                <InvalidateOnResize />
                <EnforceIndia bounds={lb} minZoom={minZoom} />

                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    noWrap
                    // valid GridLayer/TileLayer options:
                    updateWhenIdle
                    keepBuffer={1}
                    detectRetina={false}
                    maxZoom={18}
                    maxNativeZoom={18}
                />

                {markerNodes}
            </MapContainer>
        </div>
    );
}
