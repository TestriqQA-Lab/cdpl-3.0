
const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'types', 'courseData.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex to extract location field (single or double quotes)
    const locationRegex = /location:\s*(["'])(.*?)\1/g;
    let match;
    const locations = [];

    while ((match = locationRegex.exec(content)) !== null) {
        locations.push(match[2]);
    }

    console.log(`Found ${locations.length} locations.`);

    const normalizedCities = new Set();
    const problematicCities = [];

    // Clear mapping file
    fs.writeFileSync('city_mapping.txt', '');

    locations.forEach(loc => {
        let city = loc.trim();
        // Apply the same normalization logic
        city = city.replace(/ Station, Mumbai$/i, "")
            .replace(/, Mumbai$/i, "")
            .replace(/\s*\(.*?\)\s*/g, "") // Remove (Text)
            .trim();

        // Filter out invalid city names
        if (city === "Station" || city.includes("Stations")) {
            console.log(`Filtered out city: "${city}" (Original: "${loc}")`);
            return;
        }

        fs.appendFileSync('city_mapping.txt', `"${loc}" -> "${city}"\n`);

        normalizedCities.add(city);

        // Check for remaining issues
        if (city.includes("(") || city.includes(")") || city.toLowerCase().endsWith("mumbai")) {
            problematicCities.push(city);
        }
    });

    console.log(`Found ${normalizedCities.size} unique normalized cities.`);

    if (problematicCities.length > 0) {
        console.log("FAILED: Found cities still containing issues:");
        problematicCities.forEach(c => console.log(c));
    } else {
        console.log("SUCCESS: No cities contain issues after normalization.");
    }

} catch (err) {
    console.error("Error:", err);
}
