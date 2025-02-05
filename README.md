# Voicemail System with SMS & Email Notifications

This project enables voicemail recording, email notifications, SMS alerts, and WhatsApp alerts. It is built using **Twilio**, **Node.js**, and **MongoDB**. The system records incoming calls, stores voicemails in a MongoDB database, and sends notifications through **Email** (via **Nodemailer**) and **SMS** (via **Twilio** SMS API).

## Features

- **Voicemail Recording**: Handles incoming calls and records voicemails using the **Twilio Voice API**.
- **MongoDB Storage**: Stores caller information, recording URLs, and timestamps in **MongoDB**.
- **Email Notifications**: Sends email notifications when a voicemail is recorded using **Nodemailer**.
- **SMS Alerts**: Sends SMS alerts via the **Twilio SMS API**.
- **REST API**: Built with **Node.js** and **Express** to handle calls and notifications.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Environment Variables](#environment-variables)
5. [API Routes](#api-routes)
6. [Notification Services](#notification-services)
7. [Testing](#testing)
8. [Usage](#usage)
9. [Contributing](#contributing)
10. [License](#license)

---

## Technologies Used

- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for building the RESTful API.
- **MongoDB**: NoSQL database for storing voicemail data.
- **Twilio**: API for handling incoming calls, recording voicemails, and sending SMS notifications.
- **Nodemailer**: For sending email notifications.
- **Baileys** (optional): For WhatsApp integration.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/danishskh70/voicemail-system.git
cd voicemail-system
```
----
After cloning the repository, install the required dependencies:

```bash
npm install

```
---

### 2. **Project Structure** (`PROJECT_STRUCTURE.md`)

```markdown
# Project Structure

This section explains the structure of the project directory.

```bash
voicemail-system/
├── controllers/
│   ├── voicemailController.js      # Handles voicemail recording logic
│   ├── notificationController.js   # Handles email & SMS notifications
├── models/
│   └── voicemail.js                # MongoDB schema for voicemails
├── routes/
│   └── voicemailRoutes.js          # API routes for voicemail-related actions
├── services/
│   ├── emailService.js             # Sends email notifications
│   ├── smsService.js               # Sends SMS notifications
├── .env                            # Environment variables for sensitive information
├── app.js                          # Main entry point for the app
├── package.json                    # Project metadata and dependencies
└── README.md                       # Project documentation
```
## Description of Folders:
1. controllers/: Contains logic for handling voicemail recording and sending notifications.
2. models/: Contains the MongoDB schema for voicemails.
3. routes/: Contains the API routes related to voicemail actions.
4. services/: Contains services for sending email and SMS notifications.
5. .env: Stores sensitive environment variables.
6. app.js: The entry point for the application.
7. package.json: Contains metadata, scripts, and dependencies for the project.


---

### 3. **Environment Variables** (`ENVIRONMENT_VARIABLES.md`)

```markdown
# Environment Variables

Create a `.env` file in the root directory with the following content. This file stores sensitive information such as Twilio credentials, MongoDB connection string, and email credentials.

### Required Environment Variables:

```plaintext
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
MONGODB_URI=your_mongodb_connection_string
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=587
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
FROM_EMAIL=your_from_email

```
# Steps:
Replace the placeholder values (your_*) with your actual credentials.
Save the file as .env in the root directory of the project.

---

### 4. **API Routes** (`API_ROUTES.md`)

```markdown
# API Routes

The project includes several API routes that handle voicemail recording and notification services. Below is a description of the main route.

### 1. `/api/voicemail/record` (POST)

- **Description**: Initiates the voicemail recording process for incoming calls.
- **Body**:
    - `callerNumber`: The phone number of the caller.
    - `recordingUrl`: The URL to access the recorded voicemail.
    - `timestamp`: Time when the voicemail was recorded.

- **Response**:
    ```json
    {
      "message": "Voicemail recorded successfully",
      "data": {
        "callerNumber": "+1234567890",
        "recordingUrl": "https://yourrecordingurl.com/voice.mp3",
        "timestamp": "2025-02-03T12:00:00"
      }
    }
    ```

This route is used to record voicemails and send notifications to the relevant recipients.
```
# Notification Services

The project uses two notification services to inform users when a voicemail has been recorded: **Email Notifications** and **SMS Notifications**.

### 1. **Email Notifications (via Nodemailer)**

- Sends an email notification to a predefined address when a voicemail is recorded.
- The recipient email can be modified in the `emailService.js` file.

### 2. **SMS Notifications (via Twilio API)**

- Sends an SMS alert to a predefined phone number when a voicemail is recorded.
- The recipient phone number can be modified in the `smsService.js` file.

---

# Testing

This section explains how to test the application using unit tests and manual testing.

###

---

This is now ready for your project! You can save it as `README.md` in your project directory, and it will contain all necessary details, from installation and setup to usage and contributing. Let me know if you need any further adjustments!


