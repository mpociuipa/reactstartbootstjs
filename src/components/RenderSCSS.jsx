import React from 'react';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sass = require('sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const packageJSON = require('../package.json');

const RenderSCSS = () => {

  const entryPoint = `/*!
  * Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
  * Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
  * Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
  */
  @import "../src/scss/styles.scss";
  `;

  const destPath = path.resolve(__dirname, '../dist/css/styles.css');
  const results = sass.renderSync({
    data: entryPoint,
    includePaths: [
      path.resolve(__dirname, '../node_modules')
    ],
  });

  const destPathDirname = path.dirname(destPath);
  if (!fs.existsSync(destPathDirname)) {
    fs.mkdirSync(destPathDirname, { recursive: true });
  }

  postcss([autoprefixer]).process(results.css, { from: 'styles.css', to: 'styles.css' }).then(result => {
    result.warnings().forEach(warn => {
      console.warn(warn.toString());
    });
    fs.writeFileSync(destPath, result.css.toString());
  });

  return (
    <div>
      <p>SCSS has been rendered and saved to {destPath}</p>
    </div>
  );
};

export default RenderSCSS;
