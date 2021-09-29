import flatPromise from "../utils/flatPromise";

export const actionWithPromise = (action) => {
  const { promise, resolve, reject } = flatPromise();
  return Object.assign({}, action, { promise, resolve, reject });
};

export const promisesMiddleware = () => (next) => (action) => {
  if (action.promise) {
    next(action);
    return action.promise;
  }
  return next(action);
};
