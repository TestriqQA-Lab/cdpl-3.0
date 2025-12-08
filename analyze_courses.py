
import re

def analyze_courses(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find course objects. This is a heuristic.
    # We look for the start of an object with a slug or courseName
    # It's a large text file, so we iterate line by line or use partial matching.
    # Given the structure: "slug-key": { ... }
    
    # We'll look for `courseName": "..."` and check context.
    
    courses = {}
    
    # Simple state machine to parse the file
    current_course = None
    has_specializations = False
    
    lines = content.splitlines()
    for i, line in enumerate(lines):
        # Detect start of a course entry (simplified)
        # It's usually a key string followed by {
        # But easier to look for "courseName"
        
        if '"courseName":' in line:
            match = re.search(r'"courseName":\s*"([^"]+)"', line)
            if match:
                name = match.group(1)
                # Check previous few lines for the key/slug if needed, 
                # but we just want to know if THIS block gets a specialization before the next courseName
                
                if current_course:
                    # Record the previous course status
                    if current_course not in courses:
                        courses[current_course] = {'count': 0, 'with_spec': 0, 'without_spec': 0}
                    courses[current_course]['count'] += 1
                    if has_specializations:
                        courses[current_course]['with_spec'] += 1
                    else:
                        courses[current_course]['without_spec'] += 1
                
                current_course = name
                has_specializations = False
        
        if '"specializations":' in line:
            has_specializations = True

    # Record the last one
    if current_course:
        if current_course not in courses:
            courses[current_course] = {'count': 0, 'with_spec': 0, 'without_spec': 0}
        courses[current_course]['count'] += 1
        if has_specializations:
            courses[current_course]['with_spec'] += 1
        else:
            courses[current_course]['without_spec'] += 1

    print("Analysis Results:")
    print(f"{'Course Name':<50} | {'Total':<10} | {'With Spec':<10} | {'Missing Spec':<10}")
    print("-" * 90)
    for name, stats in courses.items():
        print(f"{name:<50} | {stats['count']:<10} | {stats['with_spec']:<10} | {stats['without_spec']:<10}")

if __name__ == "__main__":
    analyze_courses(r'c:\Users\iis02\OneDrive\Documents\Projects\New\cdpl\cdpl3\src\types\courseData.ts')
