/**
 * Script de test pour vérifier le fonctionnement de PurgeCSS
 * Ce script analyse les classes CSS utilisées dans votre projet
 */

import fs from 'fs';
import path from 'path';

// Fonction pour scanner les fichiers JSX/JS
function scanFiles(dir, extensions = ['.jsx', '.js']) {
  let classes = new Set();

  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (extensions.some((ext) => file.endsWith(ext))) {
        const content = fs.readFileSync(filePath, 'utf8');
        const classMatches = content.match(/className\s*=\s*["'`]([^"'`]+)["'`]/g);

        if (classMatches) {
          classMatches.forEach((match) => {
            const classString = match.match(/className\s*=\s*["'`]([^"'`]+)["'`]/)[1];
            classString.split(' ').forEach((cls) => {
              if (cls.trim()) classes.add(cls.trim());
            });
          });
        }
      }
    });
  }

  scanDirectory(dir);
  return Array.from(classes).sort();
}

// Scan du projet
console.log('🔍 Analyse des classes CSS utilisées dans votre projet...\n');

const srcDir = './src';
if (fs.existsSync(srcDir)) {
  const usedClasses = scanFiles(srcDir);

  console.log(`📊 Classes CSS détectées : ${usedClasses.length}\n`);
  console.log('📋 Liste des classes :');
  usedClasses.forEach((cls, index) => {
    console.log(`${index + 1}. ${cls}`);
  });

  console.log('\n✅ PurgeCSS analysera ces classes et conservera uniquement celles utilisées.');
  console.log('🚀 Exécutez "npm run build" pour tester PurgeCSS en production.');
} else {
  console.log("❌ Dossier src non trouvé. Assurez-vous d'être dans le répertoire racine du projet.");
}
