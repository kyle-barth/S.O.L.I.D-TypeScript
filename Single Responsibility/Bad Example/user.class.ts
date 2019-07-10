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