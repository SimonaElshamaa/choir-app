import {
  UN_AUTHENTICATED,
  UN_KNOWN,
  TOKEN_EXPIRED,
  SERVICE_DOWN,
  UN_AUTHORIZED,
  UNAUTHENTICATED,
  TOKEN_INVALID,
  SERVER_ERROR,
} from "../../constants/ApiErrors";

import { errorCreator } from "../../utils/errorCreator";

const handle401 = (httpCodeException) => {
  if (httpCodeException.body && httpCodeException.body.type) {
    if (httpCodeException.body.type === UNAUTHENTICATED)
      return errorCreator(UN_AUTHENTICATED, {});
    if (httpCodeException.body.type === TOKEN_EXPIRED)
      return errorCreator(TOKEN_EXPIRED, {});
    if (httpCodeException.body.type === TOKEN_INVALID)
      return errorCreator(TOKEN_INVALID, {});
  }
  return errorCreator(UN_KNOWN, {});
};

// eslint-disable-next-line no-unused-vars
const handle422 = (httpCodeException) => {
  const { type, details } = httpCodeException.body;
  return errorCreator(type, details);
};

const handle404 = (httpCodeException) => {
  const { type, details } = httpCodeException.body;
  return errorCreator(type, details);
};

const returnError = (ERROR_CONST) => () => {
  return ERROR_CONST;
};

const handleUnknownCode = (httpCodeException) => {
  const status = httpCodeException.status;
  const isServiceDown = Math.floor(status / 100) === 5;
  if (isServiceDown) {
    returnError({ type: SERVICE_DOWN, details: {} });
  } else {
    returnError({ type: UN_KNOWN, details: {} });
  }
};

export const defaultHTTPHandlers = {
  401: handle401,
  400:handle422,
  403: returnError({ type: UN_AUTHORIZED, details: {} }),
  422: handle422,
  404: handle404,
  520: returnError({ type: SERVER_ERROR, details: {} }),
  unknownCode: handleUnknownCode,
};
