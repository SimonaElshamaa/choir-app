/* eslint-disable import/no-anonymous-default-export */
export default (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Connection timed out after ${timeout}`));
    }, timeout);
  });
};
