export function fromAPI(data) {
  return {
    token: data.Authorization,
  };
}

export default {
  fromAPI,
};
