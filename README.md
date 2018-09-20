# message_app

## Synopsis

Simple REST API for sending messages with 2 endpoints.

## Getting Started

clone repository and cd into message_app. Run `npm install` to install dependencies,
then run `npm start` from the command line.
App will run on local port 3000.

## Built With

- [Koa](https://koajs.com/)

## **Post Message**

Post a message, with To, From, and message content.

- **URL**

  /messages

- **Method:**

  `POST`

- **Data Structure**

  `{ to : Jen, from : "Matt", message: hi }`

## **Get Stats**

Get the last message sent and the ammount of calls made.

- **URL**

  /stats

- **Method:**

  `GET`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ numberOfCalls : 12, lastMEssage : "Bye" }`
