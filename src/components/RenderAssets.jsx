import React from 'react';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const RenderAssets = () => {
  const sourcePath = path.resolve(__dirname, '../src/assets');
  const destPath = path.resolve(__dirname, '../dist/');

  execSync(`cp -R ${sourcePath} ${destPath}`);

  return (
    <div>
      <p>Assets have been rendered from {sourcePath} to {destPath}</p>
    </div>
  );
};

export default RenderAssets;
