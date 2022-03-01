export default function authHeader() {
  const obj = JSON.parse(localStorage.getItem("login"));
  if (obj && obj.token) {
    return { Authorization: obj.token };
  } else {
    return {};
  }
}
