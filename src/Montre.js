import React, { useEffect, useState } from 'react';
export const Montre = (props) => {
  const currentDate = new Date();
  const hours = setHours();
  const minutes = setMinutes();
  const secondes = setSeconds();

  const [date, setDate] = useState([hours, minutes, secondes]);
  useEffect(() => {
    setTimeout(() => { setDate([hours, minutes, secondes]); }, 1000);
  });
  return (<h1>{hours} : {minutes} : {secondes}</h1>);
  
  function setSeconds() {
    const secondes = (currentDate.getSeconds());
    const secondesSplit = secondes.toString();
    if (secondesSplit.length < 2) {
      console.log(secondesSplit.length);
      return (`0${secondes}`);
    }
    return (`${secondes}`);
  }

  function setMinutes() {
    const minutes = (currentDate.getMinutes());
    const minutesSplit = minutes.toString();
    if (minutesSplit.length < 2) {
      console.log(minutesSplit.length);
      return (`0${minutes}`);
    }
    return (`${minutes}`);
  }

  function setHours() {
    const hours = (currentDate.getHours());
    const hoursSplit = hours.toString();
    if (hoursSplit.length < 2) {
      console.log(hoursSplit.length);
      return (`0${hours}`);
    }
    return (`${hours}`);
  }
};


