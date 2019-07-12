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
function calculateAreas(squares: Square[], rectangles: Rectangle[]): number[] {
    const squareAreas: number[] = squares.map((square: Square) => square.getArea());
    const rectangleAreas: number[] = rectangles.map((rectangle: Rectangle) => rectangle.getArea());

    return [ ...squareAreas, ...rectangleAreas];
}