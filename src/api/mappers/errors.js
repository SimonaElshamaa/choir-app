export function fromAPI(error) {
  return {
    type: error.type,
    details: error.details,
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fromAPI,
};
