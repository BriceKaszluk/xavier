import React, { useEffect, useState } from 'react';
import { setTime } from '../../services/setTime';

//composant Montre
export default (props) => {

  const [date, setDate] = useState(setTime());
  useEffect(() => {
    setTimeout(() => { setDate(setTime()); }, 1000);
  });

  return (<h1>{date.hours} : {date.minutes} : {date.seconds}</h1>);
};