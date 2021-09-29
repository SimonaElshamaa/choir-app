import { removeUndefinedKeys } from "../../utils/helpers";

export function fromAPI(apiMetadata) {
  return removeUndefinedKeys({
    total: apiMetadata.total,
    count: apiMetadata.count,
    currentPage: apiMetadata.currentPage,
    lastPage: apiMetadata.lastPage,
    perPage: apiMetadata.perPage,
  });
}

export default {
  fromAPI,
};
