const fs = require("fs");
const ejs = require("ejs");
const {
  sendSingleMail,
  saveTransaction,
  parseTemplate,
} = require("../../../../_helpers/zeptomail/sendSingleMail");
const { ACTIONS } = require("../../../../_constants/action");
const { filePaths } = require("../../../../_assets");


exports.sendWelcomeMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(process.cwd() + filePaths.WelcomeMail, {
      encoding: "utf-8",
    });
    const Data = {
      firstname: bodyData.first_name
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Welcome Onboard";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_WELCOME_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Welcome mail sent successfully",
        data: null,
      };
    // }
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending welcome mail",
      data: err,
    };
  }
};

exports.sendRequestAccountVerificationMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.RequestAccountVerification,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
      token: bodyData.token,
      link:bodyData.link
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Verify Account";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_ACCOUNT_VERIFICATION_SUCCESSFUL_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Verification Mail Sent Successfully",
        data: null,
      };
    
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error Sending Verification Mail",
      data: err,
    };
  }
};

exports.sendAccountVerificationSuccessfulMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.AccountVerificationSuccessful,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Account Verified";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)

      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_REQUEST_ACCOUNT_VERIFICATION_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Verification Successful Mail Sent Successfully",
        data: null,
      };
    
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error Sending Verification Successful Mail",
      data: err,
    };
  }
};

exports.sendRequestPasswordResetMail = async (bodyData) => {
  try {
    console.log("EMAIL : ========================= ", bodyData.email);
    // console.log("BODY : ========================= ", bodyData);
    const template = fs.readFileSync(
      process.cwd() + filePaths.RequestPasswordReset,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
      token: bodyData.token,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Password Reset";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_REQUEST_PASSWORD_RESET_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Request Password Reset mail sent Successfully",
        data: null,
    }
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending password Reset mail",
      data: err,
    };
  }
};

exports.passwordResetSucessfulMail = async (bodyData) => {
    try {
      const template = fs.readFileSync(
        process.cwd() + filePaths.PasswordResetSuccessful,
        {
          encoding: "utf-8",
        }
      );
      const Data = {
        firstname: bodyData.first_name,
      };
  
      const html = ejs.render(template, Data);
      bodyData.html = html;
      bodyData.subject = "Password Reset Successful";
      const mailResponse = await sendSingleMail(bodyData);
      console.log("ZEPTO MAIL RESPONSE", mailResponse)
        const savedTransaction = await saveTransaction(
          ACTIONS.SEND_USER_PASSWORD_RESET_SUCCESSFUL_MAIL,
          bodyData
        );
        return {
          error: false,
          message: "Password Reset Successfully mail sent Successfully",
          data: null,
        };
      
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: "Error sending password Reset mail",
        data: err,
      };
    }
  };

exports.sendMaintenanceNoticeMail = async (bodyData) => {
  try {
    //  parse template
    const template = fs.readFileSync(
      process.cwd() + filePaths.MaintenanceNotice,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
      start: bodyData.start,
      end: bodyData.end,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Maintenance Notice";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_MAINTENANCE_NOTICE_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Maintenace Notice sent successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending maintenance",
      data: err,
    };
  }
};

exports.sendMaintenanceCompleteMail = async (bodyData) => {
  try {
    //  parse template
    const template = fs.readFileSync(
      process.cwd() + filePaths.MaintenanceCompleted,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Maintenance Completed";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_MAINTENANCE_COMPLETE_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Maintenace Completed mail sent successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending maintenance complete mail",
      data: err,
    };
  }
};

exports.sendTerminationNoticeMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.TerminationNotice,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Termination Notice";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_TERMINATION_NOTICE_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Termination Notice sent successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending Termination Notice",
      data: err,
    };
  }
};

exports.sendTerminationApprovedMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.TerminationApproved,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Account Termination Approved";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_TERMINATION_APPROVED_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Termination Approved Notice sent successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending Termination Approval Notice",
      data: err,
    };
  }
};

exports.sendUserLongTimeNoticeMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.LongTimeNotice,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Been A While!!";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_LONGTIME_NOTICE_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Long Time Notice Sent Successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending LongTime Notice",
      data: err,
    };
  }
};

exports.sendUserDownTimeNoticeMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.DownTimeNotice,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "So Sorry There's Been A Glitch.. DownTime!!";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_DOWNTIME_NOTICE_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "DownTime Notice Sent Successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending DownTime Notice",
      data: err,
    };
  }
};

exports.sendUserBioUpdateMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(process.cwd() + filePaths.BioUpdate, {
      encoding: "utf-8",
    });
    const Data = {
      firstname: bodyData.first_name,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Bio Updayted!";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_BIO_UPDATE_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Bio Updated Mail Sent Successfully",
        data: null,
      };
    
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending Bio Updated mail",
      data: err,
    };
  }
};

exports.sendUserUpdateAppMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(process.cwd() + filePaths.updateAppMail, {
      encoding: "utf-8",
    });
    console.log("link: ", bodyData.link);
    const Data = {
      firstname: bodyData.first_name,
      link: bodyData.link,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Update Your ResearchBuddy App!";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      const savedTransaction = await saveTransaction(
        ACTIONS.SEND_UPDATE_APP_MAIL,
        bodyData
      );
      return {
        error: false,
        message: "Mail Sent Successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending App Update mail",
      data: err,
    };
  }
};

exports.sendSubscriptionSuccesfullMail = async (bodyData) => {
  try {
    const template = fs.readFileSync(
      process.cwd() + filePaths.SubScritptionSuccessfull,
      {
        encoding: "utf-8",
      }
    );
    const Data = {
      firstname: bodyData.first_name,
      amount: bodyData.amount,
      userReference: bodyData.userReference,
      date: bodyData.date,
    };

    const html = ejs.render(template, Data);
    bodyData.html = html;
    bodyData.subject = "Subscription Successful";
    const mailResponse = await sendSingleMail(bodyData);
    console.log("ZEPTO MAIL RESPONSE", mailResponse)
      await saveTransaction(ACTIONS.SEND_SUBSCRIPTION_SUCCESS_MAIL, bodyData);
      return {
        error: false,
        message: "Mail Sent Successfully",
        data: null,
      };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      message: "Error sending mail",
      data: err,
    };
  }
};

exports.sendSubscriptionFailedMail = async (bodyData) => {
    try {
      const template = fs.readFileSync(
        process.cwd() + filePaths.SubScritptionFailed,
        {
          encoding: "utf-8",
        }
      );
      const Data = {
        firstname: bodyData.first_name,
        amount: bodyData.amount,
        userReference: bodyData.userReference,
        date: bodyData.date,
      };
  
      const html = ejs.render(template, Data);
      bodyData.html = html;
      bodyData.subject = "Subscription Failed";
      const mailResponse = await sendSingleMail(bodyData);
      console.log("ZEPTO MAIL RESPONSE", mailResponse)
        await saveTransaction(ACTIONS.SEND_SUBSCRIPTION_SUCCESS_MAIL, bodyData);
        return {
          error: false,
          message: "Mail Sent Successfully",
          data: null,
        };
    } catch (err) {
      console.log(err);
      return {
        error: true,
        message: "Error sending mail",
        data: err,
      };
    }
  };