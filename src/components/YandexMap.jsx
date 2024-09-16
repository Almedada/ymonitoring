import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => {
  return (
    <YMaps /*query={{ apikey: '40c39907-f3a3-4dcf-b9a6-273845d69695' }}*/>
      <Map
        defaultState={{
          center: [54.846468, 83.052066],  // ВКИ
          zoom: 9, 
        }}
        width="100%" // Ширина карты
        height="1080px" // Высота карты
      >
        <Placemark geometry={[54.846468, 83.052066]} /> {/* Метка */}
      </Map>
    </YMaps>
  );
};

export default YandexMap;
