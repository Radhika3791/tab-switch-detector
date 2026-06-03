# Tab Switching Detection System

## Objective
Detect when a user leaves the interview tab and log the activity.

## Features
- Tab switching detection using visibilitychange
- Backend logging with Express.js
- Real-time activity logs
- Timestamp tracking
- CORS enabled communication

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js

## Author
Radhika Gudimetta
## Setup Instructions

1. Install dependencies:

npm install

2. Start the backend server:

node server.js

3. Server runs on:

http://localhost:3000

## API Endpoint

POST /log

This endpoint receives tab-switch activity logs from the frontend and sends them to the Express.js backend.

## Browser Testing

Tested on:
- Chrome 124
- Firefox 125
- Edge 121
