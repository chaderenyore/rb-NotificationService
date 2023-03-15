const {Router} = require ('express');

// middlewares
const {authorizeAdmin} = require ('../../../middlewares/authorizeAdmin');
const validateRequest = require ('../../../middlewares/vallidateRequest');

// validators
const AdminAddedValidator = require("../../../validators/admin/adminAddedMail.validator");
const AdminWelcomeValidator = require("../../../validators/admin/adminWelcomeMail.validator");
const NewAdminLoggedInValidator = require("../../../validators/admin/newAdminLoggedInMail");
const UserBlockedValidator = require('../../../validators/admin/userBlockedMail.validator');

// controllers
const AddNewAdminMailController = require ('../../admin/controllers/addNewAdmin.controller');
const NewAdminLoggedInMailController = require ('../../admin/controllers/newAdminLoggedIn.controller');
const AdminWelcomeMailController = require ('../../admin/controllers/adminWelcome.controller');
const UserBlockedController = require('../../admin/controllers/userBlocked.controller')

const router = Router ();

router.post (
  '/new-admin',
  authorizeAdmin([
    'super',
    'admin',
    'support',
    'content-writer',
    'research-reviewer',
    'moderator',
    'account-view',
    'account-edit',
  ]),
  validateRequest (AdminAddedValidator.adminAddedSchema, 'body'),
  AddNewAdminMailController.adminAddedMailController
);

router.post (
  '/welcome-mail',
  authorizeAdmin ([
    'super',
    'admin',
    'support',
    'content-writer',
    'research-reviewer',
    'moderator',
    'account-view',
    'account-edit',
  ]),
  validateRequest (AdminWelcomeValidator.adminWelcomeSchema, 'body'),
  AdminWelcomeMailController.adminWelcomeMailController
);

router.post (
  '/admin-loggedin',
  authorizeAdmin ([
    'super',
    'admin'
  ]),
  validateRequest (NewAdminLoggedInValidator.newAdminLoggedInSchema, 'body'),
  NewAdminLoggedInMailController.newAdminLoggedInMailController
);

router.post(
  '/user-blocked',
  authorizeAdmin([
    'super',
    'admin',
    'moderator'
  ]),
  validateRequest(UserBlockedValidator.userBlockedSchema, 'body'),
  UserBlockedController.userBlockedMailController
)

module.exports = router;
