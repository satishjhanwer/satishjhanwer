require('dotenv').config();
const Mustache = require('mustache');
const fs = require('fs');

const MUSTACHE_MAIN = './main.mustache';

let DATA = {
  refresh_date: new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'Asia/Kolkata',
  }),
};

async function generateReadMe() {
  await fs.readFile(MUSTACHE_MAIN, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString(), DATA);
    fs.writeFileSync('README.md', output);
  });
}

generateReadMe();
