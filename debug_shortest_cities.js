
const fs = require('fs');

try {
    const content = fs.readFileSync('city_mapping.txt', 'utf8');
    const lines = content.split('\n').filter(l => l.trim());

    const cities = lines.map(l => {
        const parts = l.split(' -> "');
        if (parts.length < 2) return null;
        const city = parts[1].replace(/"$/, '');
        return city;
    }).filter(c => c);

    cities.sort((a, b) => a.length - b.length);

    console.log("Shortest 20 cities:");
    cities.slice(0, 20).forEach(c => console.log(c));

} catch (err) {
    console.error(err);
}
