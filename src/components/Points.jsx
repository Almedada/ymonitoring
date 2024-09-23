// Points.js
import React from 'react';
import { GeoObject } from '@pbe/react-yandex-maps';

const Points = ({ points }) => {
  return (
    <>
      {points.map((point, index) => (
        <GeoObject
          key={index}
          geometry={{
            type: 'Point',
            coordinates: point,
          }}
          options={{
            preset: 'islands#circleIcon',
            iconColor: '#1E90FF',
          }}
        />
      ))}
    </>
  );
};

export default Points;
