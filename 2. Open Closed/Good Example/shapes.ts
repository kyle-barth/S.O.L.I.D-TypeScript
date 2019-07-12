interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }
}

class Square implements Shape {
    height: number;

    constructor(height: number) {
        this.height = height;
    }

    getArea() {
        return this.height * this.height;
    }
}

// ... later on in the code
function calculateAreas(shapes: Shape[]) {
    return shapes.map((shape: Shape) => shape.getArea());
}