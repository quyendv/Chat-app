# Chat App

A real-time messaging application through a Google account.

## Tech Stack

[**ReactJS**](https://react.dev/) with [**Firebase**](https://firebase.google.com/)

Other packages/frameworks: [TailwindCSS](https://tailwindcss.com/), [react-hooks-form](https://github.com/csfrequency/react-firebase-hooks), ...etc.

## Features

-   Login using Google accounts.
-   Invite someone to a conversation by entering their email address. They will receive a message when logging into the application.
-   Send and receive real-time messages.

## Restricts (Updating Features)

-   Currently, the application only allows login with Google accounts. Login or registration with usernames and passwords has not been implemented yet, and other OAuth providers such as Facebook, ... have not been added.
-   Not responsive: not compatible with all interfaces.
-   Can't send/receive images and other files

## Demo && Screenshots

[Chat App (Vercel)](https://chat-app-quyendv.vercel.app/)

![image](https://github.com/quyendv/Chat-app/assets/80147846/f059ba10-6d4f-4317-89a8-13ae9826c1dc)

![image](https://github.com/quyendv/Chat-app/assets/80147846/51dad2a7-878b-4de3-a46a-fee6e4a605c8)

![image](https://github.com/quyendv/Chat-app/assets/80147846/37a03fd3-b8d2-4349-bfc1-ea2d36d77b17)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`

`REACT_APP_AUTH_DOMAIN`

`REACT_APP_PROJECT_ID`

`REACT_APP_STORAGE_BUCKET`

`REACT_APP_MESSAGING_SENDER_ID`

`REACT_APP_APP_ID`

`REACT_APP_MEASUREMENT_ID`

## Run Locally

Clone the project

```bash
  git clone https://github.com/quyendv/Chat-app.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
