import React, { useState, useEffect } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';
import trainIcon from './train.png';

const MovingTrain = ({ route, speed = 0.001 }) => {
  const [position, setPosition] = useState(route[0]); // Текущая позиция поезда
  const [progress, setProgress] = useState(0); // Прогресс между двумя точками
  const [index, setIndex] = useState(0); // Текущий индекс точки маршрута

  // Линейная интерполяция между двумя точками
  const lerp = (start, end, t) => start + (end - start) * t;

  useEffect(() => {
    if (index >= route.length - 1) return; // Останавливаем, если достигли конца маршрута

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + speed;

        // Если прогресс достиг 1, перемещаемся к следующей точке маршрута
        if (newProgress >= 1) {
          setIndex(index + 1); // Переход к следующей точке
          return 0; // Обнуляем прогресс для следующей пары точек
        }

        // Обновляем текущее положение поезда
        const newPosition = [
          lerp(route[index][0], route[index + 1][0], newProgress), // Интерполяция по широте
          lerp(route[index][1], route[index + 1][1], newProgress), // Интерполяция по долготе
        ];

        setPosition(newPosition);
        return newProgress;
      });
    }, 50); // Обновляем каждые 50 мс

    return () => clearInterval(interval); // Очищаем интервал при размонтировании
  }, [index, progress, route, speed]);

  return (
    <Placemark
      geometry={position}
      options={{
        iconLayout: 'default#image',
        iconImageHref: trainIcon, // Иконка поезда
        iconImageSize: [30, 40], // Размер иконки
        iconImageOffset: [-15, -15], // Смещение иконки
      }}
    />
  );
};

export default MovingTrain;
