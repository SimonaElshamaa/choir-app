import timeoutRejectPromise from "./timeoutRejectPromise";
import TimeoutException from "./exceptions/TimeoutException";

const promiseStatusAndBody = (fetchPromise, timeout) => {
  const timeoutPromise = timeoutRejectPromise(timeout).catch((error) => {
    throw new TimeoutException(error.message, timeout);
  });

  const apiPromise = fetchPromise.then((response) => {
    if (response.status === 204) {
      return Promise.all([response.status]);
    } else {
      return Promise.all([response.status, response.json()]);
    }
  });

  return Promise.race([apiPromise, timeoutPromise]);
};

export default class Rest {
  constructor(url, timeout = 30000) {
    this.url = url;
    this.timeout = timeout;
  }

  post(path, data, headers = {}) {
    // eslint-disable-next-line no-undef
    return promiseStatusAndBody(
      fetch(this.url + path, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      }),
      this.timeout
    );
  }

  get(path, headers = {}) {
    // eslint-disable-next-line no-undef
    return promiseStatusAndBody(
      fetch(this.url + path, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...headers,
        },
      }),
      this.timeout
    );
  }

  patch(path, data, headers = {}) {
    // eslint-disable-next-line no-undef
    return promiseStatusAndBody(
      fetch(this.url + path, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      }),
      this.timeout
    );
  }

  delete(path, headers = {}) {
    // eslint-disable-next-line no-undef
    return promiseStatusAndBody(
      fetch(this.url + path, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          ...headers,
        },
      }),
      this.timeout
    );
  }
}
