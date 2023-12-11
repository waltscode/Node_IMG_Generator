const path = require('path');
const { Circle, Triangle, Square } = require('./shapes')
const indexModule = require('../index')

test('Index module is accessible', () => {
    // Use indexModule in some way - GREYED OUT OTHERWISE
    console.log(indexModule);

});

test('Circle renders SVG correctly', () => {
    const circle = new Circle('Hello', 'red', 'blue');
    const svgContent = circle.render();

    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill='blue' /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hello</text></svg>`;

    // Normalize whitespace in the expected value
    const normalizedExpectedSVG = expectedSVG.replace(/\s/g, '');

    expect(svgContent.replace(/\s/g, '')).toEqual(normalizedExpectedSVG);
});


test('Triangle renders SVG correctly', () => {
    const triangle = new Triangle('World', 'green', 'yellow');
    const svgContent = triangle.render();

    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 250,180 50,180"  fill='yellow' /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">World</text></svg>`;

    // Normalize whitespace in the expected value
    const normalizedExpectedSVG = expectedSVG.replace(/\s/g, '');

    expect(svgContent.replace(/\s/g, '')).toEqual(normalizedExpectedSVG);
});


test('Square renders SVG correctly', () => {
    const square = new Square('Greetings', 'blue', 'orange');
    const svgContent = square.render();

    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="160" height="160" x="70" y="20" fill='orange' /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Greetings</text></svg>`;

    // Normalize whitespace in the expected value
    const normalizedExpectedSVG = expectedSVG.replace(/\s/g, '');

    expect(svgContent.replace(/\s/g, '')).toEqual(normalizedExpectedSVG);
});
