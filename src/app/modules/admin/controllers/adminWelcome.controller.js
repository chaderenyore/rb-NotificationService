const { HTTP } = require("../../../../_constants/http");
const { RESPONSE } = require("../../../../_constants/response");
const AdminMailService = require("../services/admin.services");
const { createResponse } = require("../../../../_helpers/createResponse");
const createError = require("../../../../_helpers/createError");

exports.adminWelcomeMailController = async (req, res, next) => {
  try {
    const { data, message, error } = await AdminMailService.adminWelcomeMail(
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