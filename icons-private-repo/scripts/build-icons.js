const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'icons');
const outputDir = path.join(__dirname, '..', 'dist');
const outputFile = path.join(outputDir, 'icons.json');

const icons = {};

// Read all .svg files and build JSON
fs.readdirSync(iconsDir).forEach(file => {
  const filePath = path.join(iconsDir, file);
  const ext = path.extname(file);

  // if (ext === '.svg') {
  //   const name = path.basename(file, '.svg');
  //   const svg = fs.readFileSync(filePath, 'utf8');
  //   icons[name] = svg;
  // }

  // Copy .html file if exists
  if (ext === '.html') {
    const targetPath = path.join(outputDir, file);
    fs.mkdirSync(outputDir, { recursive: true });
    fs.copyFileSync(filePath, targetPath);
    console.log(`📄 Copied ${file} to dist/`);
  }
});

// Write icons.json
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(icons, null, 2), 'utf8');
console.log('✅ icons.json generated in dist/');
