# Single Responsibility

"Every module, class, or function should have responsibility over a single part of the functionality provided by the software"

## Bad Example

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

## Good Example

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