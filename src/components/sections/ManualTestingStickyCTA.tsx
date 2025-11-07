// import { useState, useEffect } from "react";
// import { Rocket, PlayCircle, X } from "lucide-react";
// // import { Button } from "@/components/ui/button";

// export const StickyCta = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isDismissed, setIsDismissed] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Show CTA after scrolling 300px
//       if (window.scrollY > 300 && !isDismissed) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isDismissed]);

//   const handleDismiss = () => {
//     setIsDismissed(true);
//     setIsVisible(false);
//   };

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-4xl px-4 pb-4 sm:bottom-6 sm:px-6 animate-slide-in-right">
//       <div className="relative overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-lg">
//         {/* Background Gradient */}
//         <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

//         {/* Content */}
//         <div className="relative flex flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:gap-6 sm:p-5">
//           {/* Text */}
//           <div className="text-center sm:text-left">
//             <div className="text-sm font-semibold text-foreground sm:text-base">
//               Start Your QA Career Today
//             </div>
//             <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
//               Limited seats available • Next batch starts soon
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto sm:flex-nowrap">
//             <Button
//               variant="outline"
//               size="sm"
//               className="gap-2 hover-lift"
//               onClick={() => scrollToSection("curriculum")}
//             >
//               <PlayCircle className="h-4 w-4" />
//               <span className="hidden sm:inline">View</span> Curriculum
//             </Button>
//             <Button
//               size="sm"
//               className="gap-2 shadow-lg hover-lift"
//               onClick={() => scrollToSection("enroll")}
//             >
//               <Rocket className="h-4 w-4" />
//               Enroll Now
//             </Button>
//           </div>

//           {/* Dismiss Button */}
//           <button
//             onClick={handleDismiss}
//             className="absolute right-2 top-2 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:right-3 sm:top-3"
//             aria-label="Dismiss"
//           >
//             <X className="h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
