class Rectangle {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height,
        this.width = width,
    }

    getArea() {
        return this.height * this.width;
    }
}

class Square {
    height: number;

    constructor(height: number) {
        this.height = height,
    }

    getArea() {
        return this.height * this.height;
    }
}

// ... later on in the code
function calculateAreas(squares: Square[], rectangles: Rectangle[]) {
    const squareAreas: Array<Number> = squares.forEach((square: Square) => {
        return squares.getArea();
    });

    const rectangleAreas: Array<Number> = rectangles.forEach((rectangle: Rectangle) => {
        return rectangles.getArea();
    });
}