// require('dotenv').config()

//server.js
const app = require("./app");
const port = process.env.SERVER_PORT || 4000
app.listen(port, () => {
  console.log(`TODO REST API SERVER listening on port ${port}`)
})
