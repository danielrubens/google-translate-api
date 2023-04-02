const fs = require('fs')
const path = require('path')

const components = process.argv.slice(2)
if(!components.length){
    console.log('Please specify at lest one component to create')
    process.exit(1)
}

const componentDir = path.join(__dirname, 'src', 'components')

components.forEach((component) => {
    const rafce = `import React from 'react';
    
const ${component} = () => {
    return(
        <div>
            ${component}
        </div>
    );
};
    
export default ${component};`
    
    const filePath = path.join(componentDir, `${component}.js`)
    fs.writeFileSync(filePath, rafce);
    console.log(`Component ${component}.js created successfully!`)
})