import React from 'react';
const fs = require('fs');
const path = require('path');
const pug = require('pug');
const prettier = require('prettier');
const { execSync } = require('child_process');

const RenderPug = ({ filePath }) => {
  const destPath = filePath.replace(/src\/pug\//, 'dist/').replace(/\.pug$/, '.html');
  const srcPath = path.resolve(__dirname, '../src');

  console.log(`### INFO: Rendering ${filePath} to ${destPath}`);
  const html = pug.renderFile(filePath, {
    doctype: 'html',
    filename: filePath,
    basedir: srcPath
  });

  const destPathDirname = path.dirname(destPath);
  if (!fs.existsSync(destPathDirname)) {
    fs.mkdirSync(destPathDirname, { recursive: true });
  }

  const prettified = prettier.format(html, {
    printWidth: 1000,
    tabWidth: 4,
    singleQuote: true,
    proseWrap: 'preserve',
    endOfLine: 'lf',
    parser: 'html',
    htmlWhitespaceSensitivity: 'ignore'
  });

  fs.writeFileSync(destPath, prettified);

  return (
    <div>
      <p>Pug file {filePath} has been rendered to {destPath}</p>
    </div>
  );
};

export default RenderPug;
