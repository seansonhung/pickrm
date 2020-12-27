import React, { useState, useEffect, useRef} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updatePost } from '../../graphql/mutations';

type CountDownProps = {
  seconds: number;
  pid?: string;
  entries: any;
  refresh: () => void;
}
const CountDown : React.FC<CountDownProps> = ({ seconds, entries, pid, refresh }) => {
  const [timer, setTimer] = useState(seconds);

  useEffect(() => {
    const num = setInterval(() => {
      updateCountdownEntryWinner()
    }, 1000);
    return () => {
      clearInterval(num);
    };
  }, [timer]);

  function updateCountdownEntryWinner() {
    console.log(timer)
    if (timer > 0){
      setTimer(timer => timer - 1);
    } else {
      selectWinnerEntry()
    }
  }

  async function selectWinnerEntry() {
    console.log("select winner")
      let winningEntry = "Post expired and noone participated.";
      console.log(entries[0].length);
      if (entries[0].length > 0){
        const rand =  Math.floor(Math.random() * (entries[0].length));
        winningEntry = "The winning entry is: "+ entries[0][rand].content;
      }
      const updatePostContent = {
        winningEntrie: winningEntry,
        id: pid
      };
      try {
        await API.graphql(graphqlOperation(updatePost, {input: updatePostContent}))
      } catch (err) {
        console.log('error choosing entry winner:', err)
      }
      console.log(winningEntry);
      refresh()
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
