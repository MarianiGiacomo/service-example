# backend-example
Simple service app for a Docker tutorial

# Set up and running
`npm install`

Create a `.env` file  with:

`PORT=<PORT_TO_BE_USED>`

Start:
`node index.js`

To run in Docker:
`docker build -t service-example .`

`docker run --env-file=.env --name service-example -p <PORT_IN_DOTENV>:<PORT_IN_DOTENV> service-example`
