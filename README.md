Customer Portal API - Secure V2
This project implements a secure and functional customer and employee international payments portal for an internal banking system. The application is built using Node.js, Express.js, and MongoDB, with a focus on robust security practices.
Project Overview
The system provides a dual-interface:
1.	Customer Portal: Users can register, log in, and make international payments, specifying payment details such as the amount, currency, and SWIFT code.
2.	Employee Portal: Pre-created employee accounts are available to check and process payments securely.
Key Features
1.	User Registration and Login
o	Customers can register and log in to the portal securely.
o	Employee accounts are pre-created and stored in the database to meet the requirement of having static logins.
o	Registration is offered as an additional feature for potential future use and flexibility.
2.	Secure Password Handling
o	Passwords are hashed and salted using bcrypt to ensure maximum security.
3.	Data Security with SSL
o	The app is configured to use SSL certificates for encrypted data transfer. If SSL certificates are not available, the app will default to an HTTP connection without affecting functionality.
4.	Input Validation
o	Basic input validation is implemented, with plans for future enhancements using RegEx patterns to sanitize all user inputs.
5.	Database Connection
o	MongoDB is used as the database for storing user and transaction data. Connection errors are handled gracefully to ensure the stability of the app.
6.	DevSecOps Pipeline (Future Work)
o	A CircleCI pipeline with SonarQube for security scanning and code quality checks is planned but has not yet been implemented.
Security Measures
The application has been designed with the following security features:
•	Password Security: Hashing and salting ensure that user passwords are not stored in plaintext.
•	SSL Encryption: Data transmitted between the server and clients is encrypted using SSL certificates.
•	Input Validation: Preliminary input validation is implemented to prevent injection attacks.
Future Enhancements
1.	Comprehensive Input Whitelisting: Using RegEx patterns to sanitize all inputs.
2.	Complete DevSecOps Pipeline: Implementing a CircleCI pipeline integrated with SonarQube for continuous code quality checks and security scans.
Running the Application
Prerequisites
•	Node.js installed on your system
•	MongoDB set up and running locally or remotely
Steps to Run
1.	Clone the repository:
git clone https://github.com/Sarutobikazuya3003/customer-portal-api-secure-V2
2.	Navigate to the project folder:
cd customer-portal-api-secure-V2
3.	Install dependencies:
npm install
4.	Run the server:
node server.js
o	The server will attempt to run on HTTPS using SSL certificates. If SSL is not configured, it will default to HTTP.
Notes on Static Logins
•	Pre-Created Employee Accounts: The database includes static employee accounts to fulfill the requirement of having no registration for staff. This ensures that employees can only log in using predefined credentials.
•	Registration Feature Justification: The registration route is retained as an additional feature for potential future use, allowing flexibility for customer onboarding.

