import { defaultHTTPHandlers } from "./HTTPCodeTransformers";
import { UN_KNOWN } from "../../constants/ApiErrors";

function errorTransformers() {
  return {...defaultHTTPHandlers,
  unknown: () => {
    return {
      type: UN_KNOWN,
      details: {},
    };
  },}
};

export default errorTransformers