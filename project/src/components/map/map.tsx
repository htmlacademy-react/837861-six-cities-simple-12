import { useRef, useEffect } from 'react';
import UseMap from '../../hooks/use-map';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[];
  selectedPointId: number | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ offers, selectedPointId }: MapProps): JSX.Element {
  const city = offers[0].city;
  const mapRef = useRef(null);
  const map = UseMap(mapRef, city.location);


  useEffect(() => {
    if (map) {

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedPointId !== undefined && offer.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPointId]);

  return (
    <div
      style={{ height: '500px' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
