import HTTPCodeException from "./HTTPCodeException";
import TimeoutException from "../../utils/api/exceptions/TimeoutException";
import errorTransformers from "./errorTransformers";

export const handleFailure = (resolve, actionCreator, statusHandlers = {}) => {
  const transformers = {
    ...errorTransformers,
    ...statusHandlers,
  };

  return (error) => {
    const templateHandler = handlerFactory(resolve, actionCreator);
    let transformer = () => {};

    switch (error.constructor) {
      case HTTPCodeException:
        if (transformers[error.status]) {
          transformer = transformers[error.status];
        } else {
          transformer = transformers["unknownCode"];
        }
        break;
      case TimeoutException:
        transformer = transformers["timeout"];
        break;
      default:
        transformer = transformers["unknown"];
    }

    templateHandler(transformer)(error);
  };
};

const handlerFactory = (resolve, actionCreator) => (transformer) => (error) => {
  return resolve(actionCreator(transformer(error)));
};
