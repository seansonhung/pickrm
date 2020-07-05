import React, { useState, useEffect, useRef} from 'react';

type CountDownProps = {
  difference:number;
}
const CountDown : React.FC<CountDownProps> = ({ difference }) => {
  const [timeLog, setTimeLog] = useState('');
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  //Need to not load the initial render and the default useState call.
  const isFirstRun = useRef(true);
  const isSecondRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (isSecondRun.current) {
      isSecondRun.current = false;
      return;
    }
    setTimeLog("Time Left - Days :" + time.days + " Hours : " + time.hours + " Minutes : " + time.minutes + " Seconds : " + time.seconds);
  }, [time]);

  setTimeout(() => updateCountdown(), 1000);
  function updateCountdown() {
    //post expired use default time state
    if (difference > 0) {
      // post not expired and time Tis default then change to actual time
      if (!time.days && !time.hours && !time.minutes && !time.seconds){
        setTime({
          days: Math.floor(difference / (60 * 60 * 24)),
          hours: Math.floor((difference / ( 60 * 60)) % 24),
          minutes: Math.floor((difference / 60) % 60),
          seconds: Math.floor(difference % 60)
        })
      }
      else{
        if (time.seconds > 0){
          setTime({days:time.days, hours:time.hours, minutes:time.minutes, seconds:time.seconds - 1});
        } else if (time.minutes > 0){
          setTime({days:time.days, hours:time.hours, minutes:time.minutes - 1, seconds:59});
        }else if (time.hours > 0){
          setTime({days:time.days, hours:time.hours - 1, minutes:59, seconds:59});
        }else if (time.minutes > 0){
          setTime({days:time.days - 1, hours:23, minutes:59, seconds:59});
        }
      }
    }
    else{
      setTime({days:0, hours:0, minutes:0, seconds:0});
    }
  }

  return(
    <React.Fragment>
      <h1> {timeLog}</h1>
    </React.Fragment>
  )
}

export default CountDown;
