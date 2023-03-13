const { Router } = require("express");
const UserMail = require("./modules/mail/routes/mail.routes");
const AdminMail = require("./modules/admin/routes/admin.routes");





module.exports = () => {
  
  const router = Router();

  router.use("/user", UserMail);
  router.use("/admin", AdminMail);


  return router;
};
