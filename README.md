# SOLID-TypeScript

Examples of the solid principles using TypeScript to become a better programmer.

___
## 1. Single Responsibility

"Every module, class, or function should have responsibility over a single part of the functionality provided by the software"

### Bad Example

```typescript
class User {
    constructor() { }

    addUser() {
        // ... add the user
        this.sendEmail('email@example.com');
    }

    sendEmail(to: string) {
        // ...
    }
}
```

The User Class fails the Single Responsibly Priciple as it's responsibilities include:

1. User Management.
2. Handling Emails.

### Good Example

```typescript
class User {
    private emailService: EmailService;

    constructor(emailService: EmailService) {
        this.emailService = emailService;
    }

    addUser() {
        // ... add the user
        this.emailService.sendEmail('email@example.com');
    }
}
```

The User Class passes the Single Responsibly Priciple as it's responsibilities only include:

1. User Management.

The Handling Emails would now be done by the EmailService we inject in the class.

___
## 2. Open / Closed

“Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification”

### Bad Example

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

### Good Example

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

___
