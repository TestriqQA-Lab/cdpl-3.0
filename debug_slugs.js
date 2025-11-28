
const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'types', 'courseData.ts');

try {
    const content = fs.readFileSync(filePath, 'utf8');
    const slugRegex = /slug:\s*"([^"]+)"/g;
    let match;
    const slugs = [];

    while ((match = slugRegex.exec(content)) !== null) {
        slugs.push(match[1]);
    }

    console.log(`Found ${slugs.length} slugs.`);

    function getCourseType(slug) {
        const lower = slug.toLowerCase();
        if (lower.includes("data-science") || lower.includes("ai-ml-bi") || lower.includes("business-intelligence") || lower.includes("data-analytics")) return "data-science";
        if (lower.includes("software-testing")) return "software-testing";
        if (lower.includes("digital-marketing") || lower.includes("general")) return "digital-marketing";
        if (lower.includes("web-development") || lower.includes("programming")) return "web-development";
        return undefined;
    }

    const unmatched = slugs.filter(slug => !getCourseType(slug));

    console.log(`Found ${unmatched.length} unmatched slugs.`);

    const prefixes = {};
    unmatched.forEach(slug => {
        const parts = slug.split('-');
        const prefix = parts.slice(0, 2).join('-');
        prefixes[prefix] = (prefixes[prefix] || 0) + 1;
    });

    console.log("Unmatched prefixes:");
    for (const [prefix, count] of Object.entries(prefixes)) {
        console.log(`${prefix}: ${count}`);
    }

} catch (err) {
    console.error("Error:", err);
}
