import React from 'react';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const packageJSON = require('../package.json');

const RenderScripts = () => {
  const sourcePath = path.resolve(__dirname, '../src/js');
  const destPath = path.resolve(__dirname, '../dist/');
  const sourcePathScriptsJS = path.resolve(__dirname, '../src/js/scripts.js');
  const destPathScriptsJS = path.resolve(__dirname, '../dist/js/scripts.js');
  
  const copyright = `/*!
  * Start Bootstrap - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
  * Copyright 2013-${new Date().getFullYear()} ${packageJSON.author}
  * Licensed under ${packageJSON.license} (https://github.com/StartBootstrap/${packageJSON.name}/blob/master/LICENSE)
  */
  `;
  const scriptsJS = fs.readFileSync(sourcePathScriptsJS);

  fs.writeFileSync(destPathScriptsJS, copyright + scriptsJS);
  execSync(`cp -R ${sourcePath} ${destPath}`);

  return (
    <div>
      <p>Scripts have been rendered and copied from {sourcePath} to {destPath}</p>
    </div>
  );
};

export default RenderScripts;
