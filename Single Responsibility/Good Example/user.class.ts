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