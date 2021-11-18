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
export const LIST_GROUPS = "LIST_GROUPS";
export const CHANGE_GROUP = "CHANGE_GROUP";

/**
 * Helper Methods
 */
export const getActionType = (requestName, requestState) => {
  return `${requestName}_${requestState}`;
};
