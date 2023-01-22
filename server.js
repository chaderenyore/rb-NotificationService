const mongoose = require("mongoose");
const app = require("./src");
const KEYS = require("./src/_config/keys");
const logger  = require('./logger.conf');
const WelcomeMailConsumer = require('./src/_queue/consumers/welcomMail.consumer');
WelcomeMailConsumer.consume("Welcome Mail")

mongoose
  .connect(KEYS.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Notification Database Connected...")
    const PORT = process.env.PORT || 2104;
    const server = app.listen(PORT, () => {
      // logger.error(PORT)
      logger.info(`NOTIFICATION Server has started!... and running on port ${PORT}`);
    });
  }).catch(error => console.log(error));
