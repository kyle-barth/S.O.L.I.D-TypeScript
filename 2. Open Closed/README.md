# Open / Closed

“Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification”

## Bad Example

```typescript
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
```

The calculateAreas function fails the Open / Closed Priciple as each time we add a new shape class - we need to modify the calculateAreas function.

## Good Example

```typescript
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
function calculateAreas(shapes: Shape[]): number[] {
    return shapes.map((shape: Shape) => shape.getArea());
}
```

The calculateAreas function passes the Open / Closed Priciple as each time we add a new shape class that implements our shape interface - we don't to modify the calculateAreas function. So we can extend the functionality without modifying the code - Open for extension, Closed for modification.