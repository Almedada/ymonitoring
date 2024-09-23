import React from 'react';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Points from './Points'; 
import TrainIconPlacemark from './TrainIconPlacemark';

const YandexMap = () => {
  // Массив с координатами точек (например, городов)
  const points = [
    [54.846468, 83.052066], // Точка 1
    [54.980468, 82.898066], // Точка 2
  ];

  // Массив с координатами поездов
  const trains = [
    [54.791468, 82.897066], // Поезд 1
    [54.864468, 83.101066], // Поезд 2
  ];

  return (
    <YMaps>
      <Map
        defaultState={{
          center: [54.846468, 83.052066],  // Центр карты
          zoom: 9,
        }}
        width="100%" // Ширина карты
        height="1080px" // Высота карты
      >
        {/* Отображение точек */}
        <Points points={points} />

        {/* Отображение поездов */}
        {trains.map((train, index) => (
          <TrainIconPlacemark key={index} coordinates={train} /> // Используем компонент для поездов
        ))}
      </Map>
    </YMaps>
  );
};

export default YandexMap;
