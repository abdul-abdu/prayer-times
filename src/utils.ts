export const parseGeoLocation = (
  geoLocation: GeolocationPosition
): TLocation => ({
  coords: {
    accuracy: geoLocation.coords.accuracy,
    latitude: geoLocation.coords.latitude,
    longitude: geoLocation.coords.longitude,
  },
  timestamp: geoLocation.timestamp,
});

type TLocation = {
  coords: {
    accuracy: number;
    longitude: number;
    latitude: number;
  };
  timestamp: number;
};
