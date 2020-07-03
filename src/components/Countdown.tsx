import React, { useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify'

type CountDownProps = {
  days: Number;
  hours: Number;
  minutes: Number;
}
const CountDown : React.FC<CountDownProps> = ({ days, hours, minutes }) => {
  const [entryContent, setEntryContent] = useState("")


  return(
    <React.Fragment>
    </React.Fragment>
  )
}

export default CountDown;
