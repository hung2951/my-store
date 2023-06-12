import React from 'react'
import { useState } from 'react'

const formatDate = (date)=>{
  if(!date)  return ''
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return (
    <>
      <span className="hours">{hours}</span>
      <span className="minutes">{minutes}</span>
      <span className="seconds">{seconds}</span>
    </>
  ); 
}
const TimeClock = () => {
  const [time,setTime] = useState('')
  React.useEffect(()=>{
    setInterval(() => {
      const now = new Date()
      setTime(formatDate(now))
    }, 1000);
  },[])
  return (
    <>
      <div className='time-clock'>{time}</div>
    </>
  );
}

export default TimeClock