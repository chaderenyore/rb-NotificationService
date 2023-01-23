const { Connnection } = require('../index');
const  KEYS  = require('../../_config/keys')

const WelcomeMailConsumer = new Connnection(KEYS.AMQP_URI, KEYS.WELCOME_MAIL_QUEUE,
  async (msg) => {
    const channel = WelcomeMailConsumer.getChannel();
    if (msg !== null) {
      const message = msg.content.toString();
      console.info(` [x] Consumed : ${message}`);

      const {
        email, first_name,
      } = JSON.parse(message);

      try {

        return channel.ack(msg);
      } catch (error) {
        console.error(`Error while sending email: ${error}`);
        return channel.ack(msg);
      }
    }

    return null;
  });

  module.exports = WelcomeMailConsumer;
