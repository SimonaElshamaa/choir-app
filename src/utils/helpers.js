export const removeUndefinedKeys = (object) => {
  const newObject = {};
  Object.entries(object).forEach(([key, value]) => {
    if (value !== undefined) {
      newObject[`${key}`] = value;
    }
  });
  return newObject;
};

export const isNotValidDate = (date) => {
  return !((date instanceof Date && !isNaN(date)) || !date);
};

export const toByIds = (prevEntitiesById, currentEntities) => {
  return currentEntities.reduce(
    (obj, entity) => {
      if (prevEntitiesById[entity.id]) {
        obj[entity.id] = { ...prevEntitiesById[entity.id], ...entity };
      } else {
        obj[entity.id] = entity;
      }
      return obj;
    },
    { ...prevEntitiesById }
  );
};

export const checkHasId = (entity) => {
  if (!entity._id) {
    throw new Error("Entity has no Id");
  }
};

export const mapItemsToIds = (items) => {
  return items.reduce((obj, item) => {
    obj[item.id] = true;
    return obj;
  }, {});
};

export const addDeletedKeyToEntity = (prevEntitiesById, id) => {
  let entity = { ...prevEntitiesById[id] };
  entity.deleted = true;
  return entity;
};

export const listNotDeleted = (entitiesById) => {
  let entities = Object.keys(entitiesById).reduce((result, id) => {
    let entity = entitiesById[id];
    if (!entity.deleted) {
      result.push(entity);
    }
    return result;
  }, []);
  return entities;
};

/**
 * Convert dates from string to Date Object and validate it.
 *
 * @param {object} dates
 * @returns {object} dates after conversion
 */
export const getFormatedDates = (dates) => {
  let validDates = Object.keys(dates).reduce((result, key) => {
    result[key] = dates[key] === null ? null : new Date(dates[key]);

    if (isNotValidDate(result[key])) {
      throw new Error("failed to parse dates");
    }

    return result;
  }, {});

  return validDates;
};

export const uniqueEntities = (entities) => {
  const record = {};
  return entities.reduce((result, entity) => {
    if (entity && !(entity.id in record)) {
      record[entity.id] = true;
      result.push(entity);
    }
    return result;
  }, []);
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const translate = (ns, error, key, translation_keys) => {
  if (translation_keys.includes(key)) {
    return { path: `${ns}.${key}`, details: {} };
  }
  return { path: `common:errors.${error.type}`, details: error.details };
};
