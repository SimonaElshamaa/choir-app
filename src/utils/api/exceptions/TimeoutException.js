export default class TimeoutException extends Error {
  constructor(message, timeout) {
    super(message);
    this.timeout = timeout;
  }
}
