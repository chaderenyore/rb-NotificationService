const { Connnection } = require('../index');
const  KEYS  = require('../../_config/keys')

const PasswordResetMailConsumer = new Connnection(KEYS.AMQP_URI, KEYS.PASSWORD_RESET_MAIL_QUEUE,
  async (msg) => {
    const channel = PasswordResetMailConsumer.getChannel();
    if (msg !== null) {
      const message = msg.content.toString();
      console.info(` [x] Consumed : ${message}`);

      const {
        email, first_name,
      } = JSON.parse(message);

      try {
    //    sedn account verifcation mail
        return channel.ack(msg);
      } catch (error) {
        console.error(`Error while sending email: ${error}`);
        return channel.ack(msg);
      }
    }

    return null;
  });

  module.exports = PasswordResetMailConsumer;
