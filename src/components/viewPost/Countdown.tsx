import React, { useState, useEffect, useRef} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { updatePost } from '../../graphql/mutations';

type CountDownProps = {
  seconds: number;
  winningEntry: string;
  pid?: string;
  entries: any;
}
const CountDown : React.FC<CountDownProps> = ({ seconds, winningEntry, entries, pid }) => {
  const [timer, setTimer] = useState(seconds);
  const [chooseWinner, setChooseWinner] = useState(false);

  useEffect(() => {
    const num = setInterval(() => {
      updateCountdownEntryWinner()
    }, 1000);
    return () => {
      clearInterval(num);
    };
  }, []);

  function updateCountdownEntryWinner() {
    if (timer > 0){
      setTimer(timer => timer - 1);
    } else if (!winningEntry){ //check if ccountdown is up and no winner chosen
      console.log("select winner");
      setChooseWinner(true);
    }
  }
  function selectWinnerEntry() {
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
        API.graphql(graphqlOperation(updatePost, {input: updatePostContent}))
      } catch (err) {
        console.log('error choosing entry winner:', err)
      }
      console.log(winningEntry);
    }

  return(
    <React.Fragment>
      {timer<= 0 && !winningEntry && entries?  selectWinnerEntry() : null}
      {chooseWinner? selectWinnerEntry() : null}
      <h1> Days:{Math.floor(timer / (60 * 60 * 24) >=0? timer / (60 * 60 * 24): 0)} &nbsp;
      Hours:{Math.floor((timer / ( 60 * 60)) % 24)>=0? Math.floor((timer / ( 60 * 60)) % 24) : 0} &nbsp;
      Minutes:{Math.floor((timer / 60) % 60)>=0? Math.floor((timer / 60) % 60) : 0} &nbsp;
      Seconds:{Math.floor(timer % 60) >=0? Math.floor(timer % 60) : 0}</h1>
    </React.Fragment>
  )
}

export default CountDown;
