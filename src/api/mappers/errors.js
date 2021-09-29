export function fromAPI(error) {
  return {
    type: error.type,
    details: error.details,
  };
}
export default {
  fromAPI,
};
