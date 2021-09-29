/**
 * Request States
 * Must not contain "_"
 */
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

/**
 * Request Names
 * Must be secure object keys
 */
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const LIST_USERS = "LIST_USERS";
export const ADD_USER = "ADD_USER";
export const SEARCH = "SEARCH";

/**
 * Helper Methods
 */
export const getActionType = (requestName, requestState) => {
  return `${requestName}_${requestState}`;
};
