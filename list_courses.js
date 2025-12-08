
const fs = require('fs');
const content = fs.readFileSync('src/types/courseData.ts', 'utf-8');
const lines = content.split('\n');

const courses = new Set();
for (const line of lines) {
    const match = line.match(/"courseName":\s*"([^"]+)"/);
    if (match) {
        courses.add(match[1]);
    }
}

console.log("Unique Courses Found:");
Array.from(courses).sort().forEach(c => console.log(c));
