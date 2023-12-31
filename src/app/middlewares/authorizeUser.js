const axios = require("axios").default;
const { HTTP } = require("../../_constants/http");
const { RESPONSE } = require("../../_constants/response");
const createError = require("../../_helpers/createError");
const KEYS = require("../../_config/keys");


exports.authorizeUser = (role = []) => {
  return async (req, res, next) => {
    const message = "Unauthorized";
    const token =
      req.headers["authorization"] &&
      req.headers["authorization"].split(" ")[1];
    if (!token) {
      return next(
        createError(HTTP.UNAUTHORIZED, [
          {
            status: RESPONSE.ERROR,
            message: "No Authorization Headers Passed",
            statusCode: HTTP.UNAUTHORIZED,
          },
        ])
      );
    }
    try {
      //   validate
      const user = await axios.get(
        `${KEYS.AUTH_URI}/auth/v1/user/validate-token?platform=web`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("USERS SERVCES USER =========== ;", user);
      if (role.includes(String(user.data.data.user_type))) {
        req.token = token;
        req.user = user.data.data;
        console.log("REQ USER============ ", req.user);
        next();
      } else {
        return next(
          createError(HTTP.UNAUTHORIZED, [
            {
              status: RESPONSE.ERROR,
              message: "Unauthorized To View Resource",
              statusCode: HTTP.UNAUTHORIZED,
              data: {},
              code: HTTP.UNAUTHORIZED,
            },
          ])
        );
      }
    } catch (err) {
      console.error(err);
      return next(
        createError(HTTP.UNAUTHORIZED, [
          {
            status: RESPONSE.ERROR,
            message: err.message ? err.message : "Opps, probably Network, we know we working on it",
            statusCode: HTTP.UNAUTHORIZED,
          },
        ])
      );
    }
  };
};
