/* eslint-disable import/no-anonymous-default-export */
const apiPrefix = "/api";
// const APIURL = process.env.REACT_APP_API_URL;
const APIURL="http://localhost:3000"
console.log("API URL********",APIURL);
const ApiUrl = APIURL + apiPrefix;
const requestTimeout = 30000;

export default {
  ApiUrl,
  requestTimeout,
};
