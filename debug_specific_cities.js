
const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'types', 'courseData.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const locationRegex = /location:\s*"([^"]+)"/g;
    let match;

    console.log("Searching for problematic locations...");

    // Clear file first
    fs.writeFileSync('debug_output.txt', '');

    while ((match = locationRegex.exec(content)) !== null) {
        const loc = match[1];
        const lower = loc.toLowerCase();

        if (lower.includes("station") || lower.includes("bhayandar") || lower.includes("terminus") || lower.includes("elphinstone")) {
            // Find slug in the vicinity (assuming slug is before or after location in the object)
            // Actually, regex search for slug starting from current match index might be tricky if structure varies.
            // Let's try to find the nearest "slug:" before or after.
            // Simpler: just print the location for now, but if I can grab the whole object it's better.
            // But parsing the whole file as JS object is risky if it has imports.
            // Let's try to grab the slug by looking ahead.

            const restOfContent = content.substring(match.index);
            const slugMatch = restOfContent.match(/slug:\s*"([^"]+)"/);
            // This finds the NEXT slug, which might be for the NEXT object if location is the last field.
            // Or it might be the slug for THIS object if location is before slug.
            // In the file snippet I saw earlier, slug was BEFORE location.
            // So I should look backwards?

            // Let's try to look backwards for the slug.
            const contentBefore = content.substring(0, match.index);
            const lastSlugMatch = contentBefore.match(/slug:\s*"([^"]+)"(?=[^"]*$)/); // This is hard.

            // Alternative: just find all slugs and locations and assume they are in order?
            // Or just dump the line number.

            // Let's just print the location and the next 200 chars to see if slug is there.
            // Or previous 200 chars.

            const context = content.substring(Math.max(0, match.index - 200), Math.min(content.length, match.index + 200));
            fs.appendFileSync('debug_output.txt', `Location: "${loc}"\nContext: ${context.replace(/\n/g, ' ')}\n\n`);
        }
    }
    console.log("Done. Check debug_output.txt");

} catch (err) {
    console.error("Error:", err);
}
