// import { Point, Location, Points } from '../../types/offer';
import { useRef, useEffect } from 'react';
import UseMap from '../../hooks/use-map';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { offers } from '../../mocks/offers';
import { Offer } from '../../types/offer';

type MapProps = {
  offers: Offer[];
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

function Map(props: MapProps): JSX.Element {

  // console.log(offers[0]);
  type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  const location: Location = {
    latitude: offers[0].location.latitude,
    longitude: offers[0].location.longitude,
    zoom: offers[0].location.zoom,
  };

  // console.log(location);
  const mapRef = useRef(null);
  const map = UseMap(mapRef, location);
  // console.log(map);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        console.log(offer);
        const marker = new Marker({
          latitude: offer.location.latitude,
          longitude: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style={{ height: '500px' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
