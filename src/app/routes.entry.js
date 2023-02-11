const { Router } = require("express");
const UserMail = require("./modules/mail/routes/mail.routes");




module.exports = () => {
  
  const router = Router();

  router.use("/user", UserMail);

  return router;
};
