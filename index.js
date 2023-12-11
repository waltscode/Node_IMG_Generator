const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [{
    type: 'input',
    name: 'text',
    message: 'What text do you want in your shape?'
},

{
    type: 'input',
    name: 'text_color',
    message: 'What color would you like your text to be?'
}
    ,
{
    type: 'list',
    name: 'shape',
    message: 'Choose which shape you would like:',
    choices: ['circle', 'triangle', 'square']
}
    ,
{
    type: 'input',
    name: 'shape_color',
    message: 'What color would you like your shape?'
}
];

function init() {
    inquirer.prompt(questions).then((answers) => {
        let svg;
        if (answers.shape === 'circle') {
            svg = new Circle();
        } else if (answers.shape === 'triangle') {
            svg = new Triangle();
        } else {
            svg = new Square();
        }

        svg.setText(answers.text);
        svg.setTextColor(answers.text_color);
        svg.setShapeColor(answers.shape_color);

        // GENERATE the SVG content
        const svgContent = svg.render();

        // WRITE the SVG content to a file and NAME IT
        fs.writeFileSync('logo.svg', svgContent, 'utf-8');

        console.log('Generated logo.svg successfully! Go check it out!');
    });
}

init();
