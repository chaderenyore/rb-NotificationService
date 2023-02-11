const { Router } = require("express");
const { authorizeUser } = require("../../../middlewares/authorizeUser");
const validateRequest = require("../../../middlewares/vallidateRequest");
const userMailController = require("../../mail/services/usermail.sevices");
const {
  mailSchema,
  requestPasswordResetSchema,
  topUpSchema,
  requestAccountVerificationSchema,
  appUpdateSchema,
  customMailSchema,
} = require("../../../validators/mail.validate");

const router = Router();

router.post(
  "/welcome-mail",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendWelcomeMail
);

router.post(
  "/request-account-verification",
  authorizeUser(["user", "org"]),
  validateRequest(requestAccountVerificationSchema, "body"),
  userMailController.sendRequestAccountVerificationMail
);

router.post(
  "/account-verification-successful",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendAccountVerificationSuccessfulMail
);

router.post(
  "/request-password-reset",
  validateRequest(requestPasswordResetSchema, "body"),
  userMailController.sendRequestPasswordResetMail
);

router.post(
  "/password-reset-successful",
  validateRequest(mailSchema, "body"),
  userMailController.passwordResetSucessfulMail
);

router.post(
  "/maintenance-notice",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendMaintenanceNoticeMail
);

router.post(
  "/maintenance-complete",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendMaintenanceCompleteMail
);

router.post(
  "/account-termination",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendTerminationNoticeMail
);

router.post(
  "/account-termination-approved",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendTerminationApprovedMail
);

router.post(
  "/long-time-notice",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendUserLongTimeNoticeMail
);

router.post(
  "/down-time-notice",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendUserDownTimeNoticeMail
);

router.post(
  "/bio-update",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.sendUserBioUpdateMail
);

router.post(
  "/update-app",
  authorizeUser(["user", "org"]),
  validateRequest(appUpdateSchema, "body"),
  userMailController.sendUserUpdateAppMail
);

router.post(
  "/subscription-successfull",
  authorizeUser(["user", "org"]),
  validateRequest(topUpSchema, "body"),
  userMailController.sendSubscriptionSuccesfullMail
);

router.post(
  "/subscription-failed",
  authorizeUser(["user", "org"]),
  validateRequest(topUpSchema, "body"),
  userMailController.sendSubscriptionFailedMail
);

module.exports = router;
