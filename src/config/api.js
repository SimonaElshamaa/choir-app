/* eslint-disable import/no-anonymous-default-export */
const apiPrefix = "/api";
const APIURL = process.env.REACT_APP_API_URL;
const ApiUrl = APIURL + apiPrefix;
console.log(process.env);
const requestTimeout = 30000;

export default {
  ApiUrl,
  requestTimeout,
};
