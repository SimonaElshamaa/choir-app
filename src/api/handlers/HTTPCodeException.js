class HTTPCodeException {
  constructor({ status, body }) {
    this.status = status;
    this.body = body;
  }
}
export default HTTPCodeException;
