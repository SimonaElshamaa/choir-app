/**
 * Request States
 * Must not contain '_'
 */
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

/**
 * Helper Methods
 */
export const getActionType = (requestName, requestState) => {
  return `${requestName}_${requestState}`;
};

export const matchApiAction = (type, requestStates) => {
  const request = parseRequest(type);

  if (!request) {
    return request;
  }
  const { requestState, requestName } = request;

  if (!requestStates.includes(requestState)) {
    return false;
  }

  if (requestName.length === 0) {
    return false;
  }

  return { requestName, requestState };
};

export const parseRequest = (type) => {
  const underscoreIndex = type.lastIndexOf("_");

  if (underscoreIndex === -1) {
    return false;
  }
  const requestState = type.substr(underscoreIndex + 1, type.length - underscoreIndex - 1);
  const requestName = type.substr(0, underscoreIndex);

  return { requestState, requestName };
};
