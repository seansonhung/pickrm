import React, { useState, useEffect, useRef} from 'react';

type CountDownProps = {
  seconds:number;
}
const CountDown : React.FC<CountDownProps> = ({ seconds }) => {
  const [timer, setTimer] = useState(seconds);

  useEffect(() => {
    const num = setInterval(() => {
      updateCountdown()
    }, 1000);
    return () => {
      clearInterval(num);
    };
  }, []);

  function updateCountdown() {
    if (timer > 0){
      setTimer(timer => timer - 1);
    }
  }

  return(
    <React.Fragment>
      <h1> Days:{Math.floor(timer / (60 * 60 * 24) >=0? timer / (60 * 60 * 24): 0)} &nbsp;
      Hours:{Math.floor((timer / ( 60 * 60)) % 24)>=0? Math.floor((timer / ( 60 * 60)) % 24) : 0} &nbsp;
      Minutes:{Math.floor((timer / 60) % 60)>=0? Math.floor((timer / 60) % 60) : 0} &nbsp;
      Seconds:{Math.floor(timer % 60) >=0? Math.floor(timer % 60) : 0}</h1>
    </React.Fragment>
  )
}

export default CountDown;
