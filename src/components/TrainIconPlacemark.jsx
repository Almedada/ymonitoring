import React from 'react';
import { Placemark } from '@pbe/react-yandex-maps';
import trainIcon from './train.png'; 

const TrainIconPlacemark = ({ coordinates }) => {
  return (
    <Placemark
      geometry={coordinates}
      options={{
        iconLayout: 'default#image',
        iconImageHref: trainIcon, // Иконка поезда
        iconImageSize: [30, 40], // Размер иконки
        iconImageOffset: [-15, -15], // Смещение иконки
      }}
    />
  );
};

export default TrainIconPlacemark;
