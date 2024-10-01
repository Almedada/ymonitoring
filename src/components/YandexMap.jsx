import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import TrainRoutes from './TrainRoutes'; // Компонент для отображения путей
import MovingTrain from './MovingTrain'; // Компонент для анимации поезда

const YandexMap = () => {
  // Маршруты поездов (массив координат)
  const trainRoutes = [
    [
      [54.846468, 83.052066], // Координаты ЖД путей
      [54.980468, 82.898066],
      [54.791468, 82.897066],
    ],
  ];

  return (
    <YMaps /*query={{ apikey: '40c39907-f3a3-4dcf-b9a6-273845d69695' }}*/>
      <Map
        defaultState={{
          center: [54.846468, 83.052066],  // Центр карты
          zoom: 9,
        }}
        width="100%" // Ширина карты
        height="1080px" // Высота карты
      >
        <TrainRoutes routes={trainRoutes} /> {/* Отображение ЖД маршрутов */}
        <MovingTrain route={trainRoutes[0]} speed={0.0002} /> {/* Плавное движение поезда */}
      </Map>
    </YMaps>
  );
};

export default YandexMap;
