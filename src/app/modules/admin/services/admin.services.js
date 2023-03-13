const fs = require("fs");
const ejs = require("ejs");
const {
  sendSingleMail,
  saveTransaction,
  parseTemplate,
} = require("../../../../_helpers/zeptomail/sendSingleMail");
const { ACTIONS } = require("../../../../_constants/action");
const { filePaths } = require("../../../../_assets");


exports.sendNewAdminMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(process.cwd() + filePaths.AdminAddedMail, {
      encoding: "utf-8",
    });
    const Data = {
        newAdminUsername: bodyData.newAdminUsername,
        role : bodyData.role,
        password: bodyData.password,
        adminUrl: bodyData.adminUrl,
        loginUrl: bodyData.loginUrl
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "New Admin Alert!!!";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.ADMIN_ADDED_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Admin Added Mail sent successfully",
        data: null,
      };
    // }
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending Admin Added mail",
      data: err,
    };
  }
};

exports.newAdminLoggedInMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.NewAdminLoggedIn,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      adminUsername: bodyData.superAdminUsername,
      role: bodyData.role,
      newAdminUsername: bodyData.newAdminUsername,
      newAdminEmail:bodyData.newAdminEmail
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "New Admin Logged in";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.ADMIN_LOGGED_IN_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "New Admin Logged In Mail Sent Successfully",
        data: null,
      };
    
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error Sending New Admin Logged In Mail",
      data: err,
    };
  }
};

exports.adminWelcomeMail = async (bodyData) => {
    try {
      const template = fs.readFileSync(
        process.cwd() + filePaths.AdminWelcomeMail,
        {
          encoding: "utf-8",
        }
      );
      const Data = {
        newAdminUsername: bodyData.newAdminUsername
      };
  
      const html = ejs.render(template, Data);
      bodyData.html = html;
      bodyData.subject = "Welcome New Admin";
      const mailResponse = await sendSingleMail(bodyData);
      console.log("ZEPTO MAIL RESPONSE", mailResponse)
        const savedTransaction = await saveTransaction(
          ACTIONS.ADMIN_WELCOME_MAIL,
          bodyData
        );
        return {
          error: false,
          message: "Admin Welocme Mail Sent Successfully",
          data: null,
        };
      
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: "Error Sending Admin Welcome Mail",
        data: err,
      };
    }
  };