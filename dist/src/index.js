#!/usr/bin/env node
import fs from "fs";
import path from "path";
import chalk from "chalk";
const componentsDir = path.join(process.cwd(), "components");
const componentNames = process.argv.slice(2).map((name) => {
    const compName = name[0].toUpperCase() + name.slice(1, name.length);
    return compName;
});
const componentFolderNames = componentNames.map((name) => {
    const compName = name[0].toLocaleLowerCase() + name.slice(1, name.length);
    return compName;
});
if (componentNames.length === 0) {
    console.error("Please provide at least one component name");
    process.exit(1);
}
if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir);
}
for (let i = 0; i < componentFolderNames.length; i++) {
    const componentFolder = path.join(componentsDir, componentFolderNames[i]);
    if (fs.existsSync(componentFolder)) {
        console.log(`Component ${componentNames[i]} already exists. Skipping...`);
        continue;
    }
    fs.mkdirSync(componentFolder);
    const tsxContent = `import React from 'react';
import type { I${componentNames[i]}Props } from './${componentNames[i]}.types';

export const ${componentNames[i]} = ({ }: I${componentNames[i]}Props) => {
  return <div>${componentNames[i]}</div>;
};
`;
    const typesContent = `export interface I${componentNames[i]}Props {
  // Props
}
`;
    fs.writeFileSync(path.join(componentFolder, `${componentNames[i]}.tsx`), tsxContent);
    fs.writeFileSync(path.join(componentFolder, `${componentNames[i]}.types.ts`), typesContent);
    console.log(chalk.green(`Created ${componentNames[i]}`));
}
