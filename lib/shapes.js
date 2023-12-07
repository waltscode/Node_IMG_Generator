class Shape {

    constructor(text, text_color, shape_color){
this.text = text;
this.text_color = text_color;
this.shape_color = shape_color;
    }

setText(textValue) {
    this.text = textValue
};

setTextColor(ColorValue) {
    this.text_color = ColorValue
};

setShapeColor(ShapeColorValue) {
    this.shape_color = ShapeColorValue
};

}

class Circle extends Shape {

    constructor(text, text_color, shape_color) {
    super(text,text_color,shape_color)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill='${this.shape_color}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
      
      </svg>`
    }
}


class Triangle extends Shape {

    constructor(text, text_color, shape_color) {
    super(text,text_color,shape_color)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,20 250,180 50,180"  fill='${this.shape_color}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
      
      </svg>`
    }
}

class Square extends Shape {

    constructor(text, text_color, shape_color) {
    super(text,text_color,shape_color)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="160" height="160" x="70" y="20" fill='${this.shape_color}' />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
      
      </svg>`
    }
}

module.exports = {Circle, Triangle, Square};