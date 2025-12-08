
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/types/courseData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const dmSpec = `    specializations: [
      "Digital Marketing and Analytics - Master Program",
      "Digital Marketing and AI (For Business Owners)",
      "Digital Marketing With AI Bootcamp"
    ],`;

const lines = content.split('\n');
const newLines = [];
let insideDmCourse = false;
let hasSpec = false;
let insertionIndex = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check for start of DM course
    if (line.includes('"courseName": "Digital Marketing"')) {
        insideDmCourse = true;
        hasSpec = false;
        insertionIndex = -1;
    }

    // If inside DM course, look for specializations or insertion point
    if (insideDmCourse) {
        if (line.includes('"specializations":')) {
            hasSpec = true;
        }

        // Potential insertion point: after "state": "..."
        if (line.includes('"state":')) {
            insertionIndex = i; // This is the line with state. We want to insert AFTER this, in the newLines array.
        }

        // End of relevant config section (usually breadcrumbs or metadata or courseDetails starts)
        // If we hit one of these and haven't seen spec, we need to insert.
        if (line.includes('"breadcrumbs":') || line.includes('"metadata":') || line.includes('"courseDetails":')) {
            if (!hasSpec && insertionIndex !== -1) {
                // We need to insert specs.
                // But we are constructing newLines. 
                // We need to retroactively insert? 
                // No, we can just process this buffer logic differently or use a second pass.
                // Or better: push lines to newLines, and if we hit this condition, we splice into newLines?

                // Constructing newLines on the fly:
                // When we hit "state", we pushed it.
                // Now we hit "breadcrumbs".
                // If !hasSpec, push dmSpec before pushing current line.

                // Wait, typically "state" comes before "breadcrumbs".
                // So "dmSpec" should be pushed after "state".
                // But we didn't know if "spec" was coming later (unlikely but possible).
                // Actually, in structure, "specializations" comes BEFORE "breadcrumbs".
                // So if we are at "breadcrumbs" and haven't seen "spec", we can safely insert it now.

                newLines.push(dmSpec);
                console.log("Injecting specializations for a Digital Marketing course...");
                hasSpec = true; // Mark as done so we don't insert again
            }
            insideDmCourse = false; // Reset for next blocks (assuming block structure holds)
        }
    }

    newLines.push(line);
}

const newContent = newLines.join('\n');
fs.writeFileSync(filePath, newContent, 'utf-8');
console.log("Update complete.");
