import React from 'react';
import { Polyline } from '@pbe/react-yandex-maps';

const TrainRoutes = ({ routes }) => {
  return (
    <>
      {routes.map((route, index) => (
        <Polyline
          key={index}
          geometry={route}
          options={{
            strokeColor: '#0000FF', // Цвет линии
            strokeWidth: 4, // Ширина линии
          }}
        />
      ))}
    </>
  );
};

export default TrainRoutes;
