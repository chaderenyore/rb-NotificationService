const { Router } = require("express");
const { authorizeUser } = require("../../../middlewares/authorizeUser");
const validateRequest = require("../../../middlewares/vallidateRequest");
const userMailController = require("../../mail/controller/mail.controllers");
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
//   authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.welcomeMailController
);

router.post(
  "/request-account-verification",
  validateRequest(requestAccountVerificationSchema, "body"),
  userMailController.requestAccountVerificationController
);

router.post(
  "/account-verification-successful",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.verificationSuccessfulController
);

router.post(
  "/request-password-reset",
  validateRequest(requestPasswordResetSchema, "body"),
  userMailController.requestPasswordResetController
);

router.post(
  "/password-reset-successful",
  validateRequest(mailSchema, "body"),
  userMailController.passwordResetSuccessfulController
);

router.post(
  "/maintenance-notice",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.maintenanceNoticeController
);

router.post(
  "/maintenance-complete",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.MaintenanceCompleteController
);

router.post(
  "/account-termination",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.terminationNoticeController
);

router.post(
  "/account-termination-approved",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.terminationApprovedController
);

router.post(
  "/long-time-notice",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.userLongTimeNoticeController
);

router.post(
  "/down-time-notice",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.userDownTimeNoticeController
);

router.post(
  "/bio-update",
  authorizeUser(["user", "org"]),
  validateRequest(mailSchema, "body"),
  userMailController.userBioUpdatedController
);

router.post(
  "/update-app",
  authorizeUser(["user", "org"]),
  validateRequest(appUpdateSchema, "body"),
  userMailController.userUpdateAppController
);

router.post(
  "/subscription-successful",
  authorizeUser(["user", "org"]),
  validateRequest(topUpSchema, "body"),
  userMailController.subscriptionSuccessfullController
);

router.post(
  "/subscription-failed",
  authorizeUser(["user", "org"]),
  validateRequest(topUpSchema, "body"),
  userMailController.subscriptionFailedController
);

module.exports = router;
