import { defaultHTTPHandlers } from "./HTTPCodeTransformers";
import { UN_KNOWN } from "../../constants/ApiErrors";

export default {
  ...defaultHTTPHandlers,
  unknown: () => {
    return {
      type: UN_KNOWN,
      details: {},
    };
  },
};
