const { HTTP } = require("../../../../_constants/http");
const { RESPONSE } = require("../../../../_constants/response");
const UserMailService = require("../services/usermail.sevices");
const { createResponse } = require("../../../../_helpers/createResponse");
const createError = require("../../../../_helpers/createError");

exports.welcomeMailController = async (req, res, next) => {
  try {
    const { data, message, error } = await UserMailService.sendWelcomeMail(
      req.body
    );

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.requestAccountVerificationController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendRequestAccountVerificationMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.verificationSuccessfulController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendAccountVerificationSuccessfulMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.requestPasswordResetController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendRequestPasswordResetMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.passwordResetSuccessfulController = async (req, res, next) => {
    try {
        console.log("REQUEST =============== ", req.body)
      const { data, message, error } =
        await UserMailService.passwordResetSucessfulMail(req.body);
  
      if (error) {
        return next(
          createError(HTTP.BAD_REQUEST, [
            {
              status: RESPONSE.ERROR,
              message,
              statusCode:
                data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
              data,
            },
          ])
        );
      }
      return createResponse(message, data)(res, HTTP.OK);
    } catch (err) {
      console.log(err);
      return next(createError.InternalServerError());
    }
  };

exports.maintenanceNoticeController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendMaintenanceNoticeMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.MaintenanceCompleteController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendMaintenanceCompleteMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.terminationNoticeController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendTerminationNoticeMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.terminationApprovedController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendTerminationApprovedMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.userLongTimeNoticeController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendUserLongTimeNoticeMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.userDownTimeNoticeController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendUserDownTimeNoticeMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.userBioUpdatedController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendUserBioUpdateMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.userUpdateAppController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendUserUpdateAppMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.subscriptionSuccessfullController = async (req, res, next) => {
  try {
    const { data, message, error } =
      await UserMailService.sendSubscriptionSuccesfullMail(req.body);

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};

exports.subscriptionFailedController = async (req, res, next) => {
  try {
    const { data, message, error } = await UserMailService.sendSubscriptionFailedMail(
      req.body
    );

    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode:
              data instanceof Error ? HTTP.SERVER_ERROR : HTTP.BAD_REQUEST,
            data,
          },
        ])
      );
    }
    return createResponse(message, data)(res, HTTP.OK);
  } catch (err) {
    console.log(err);
    return next(createError.InternalServerError());
  }
};
