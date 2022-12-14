import camelCase from 'camelcase'

import { locations } from "./Location-mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = (result);
  const { geometry = {} } = result.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport:geometry.viewport };
};
