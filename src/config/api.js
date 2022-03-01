/* eslint-disable import/no-anonymous-default-export */
const apiPrefix = "/api";
// const API_URL = process.env.API_URL;

const APIURL ="http://localhost:3000";
const ApiUrl = "http://localhost:3000" + apiPrefix;
console.log(process.env);
const requestTimeout = 30000;

export default {
  APIURL,
  ApiUrl,
  requestTimeout,
};
