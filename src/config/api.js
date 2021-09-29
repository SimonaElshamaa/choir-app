// const API_URL = process.env.API_URL;
const apiPrefix = "/api";
console.log(process.env);
const ApiUrl = "http://localhost:3000" + apiPrefix;
const requestTimeout = 30000;

export default {
  ApiUrl,
  requestTimeout,
};
