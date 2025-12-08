
const fs = require('fs');

function analyzeCourses(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    const courses = {};
    let currentCourse = null;
    let hasSpecializations = false;

    // Regex to match courseName: "..."
    const courseNameRegex = /"courseName":\s*"([^"]+)"/;
    const specRegex = /"specializations":/;

    for (const line of lines) {
        const nameMatch = line.match(courseNameRegex);
        if (nameMatch) {
            const name = nameMatch[1];

            if (currentCourse) {
                if (!courses[currentCourse]) {
                    courses[currentCourse] = { count: 0, with_spec: 0, without_spec: 0 };
                }
                courses[currentCourse].count++;
                if (hasSpecializations) {
                    courses[currentCourse].with_spec++;
                } else {
                    courses[currentCourse].without_spec++;
                }
            }

            currentCourse = name;
            hasSpecializations = false;
        }

        if (specRegex.test(line)) {
            hasSpecializations = true;
        }
    }

    // Handle last one
    if (currentCourse) {
        if (!courses[currentCourse]) {
            courses[currentCourse] = { count: 0, with_spec: 0, without_spec: 0 };
        }
        courses[currentCourse].count++;
        if (hasSpecializations) {
            courses[currentCourse].with_spec++;
        } else {
            courses[currentCourse].without_spec++;
        }
    }

    console.log("Analysis Results:");
    console.log(`${"Course Name".padEnd(50)} | ${"Total".padEnd(10)} | ${"With Spec".padEnd(10)} | ${"Missing Spec".padEnd(10)}`);
    console.log("-".repeat(90));

    for (const [name, stats] of Object.entries(courses)) {
        if (stats.without_spec > 0) {
            console.log(`${name.padEnd(50)} | ${stats.count.toString().padEnd(10)} | ${stats.with_spec.toString().padEnd(10)} | ${stats.without_spec.toString().padEnd(10)}`);
        }
    }
}

analyzeCourses("src/types/courseData.ts");
