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
export const ADD_ATTENDANCE = "ADD_ATTENDANCE";
export const LIST_GROUP_ATTENDANCE = "LIST_GROUP_ATTENDANCE";

/**
 * Helper Methods
 */
export const getActionType = (requestName, requestState) => {
  return `${requestName}_${requestState}`;
};
