const fs = require('fs');
const path = require('path');
const glob = require('glob');

const docsDir = path.resolve(__dirname, '../docs');
const cssSrcDir = path.join(docsDir, '_next/static/css');

// 1. Копируем все .css в корень docs
if (fs.existsSync(cssSrcDir)) {
  const cssFiles = fs.readdirSync(cssSrcDir).filter(f => f.endsWith('.css'));
  cssFiles.forEach(file => {
    fs.copyFileSync(path.join(cssSrcDir, file), path.join(docsDir, file));
  });
}

// 2. Заменяем пути в html-файлах
const htmlFiles = glob.sync(path.join(docsDir, '**/*.html'));
htmlFiles.forEach(htmlPath => {
  let html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace(/_next\/static\/css\/(\w+\.css)/g, '$1');
  fs.writeFileSync(htmlPath, html, 'utf8');
}); 