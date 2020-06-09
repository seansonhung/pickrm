import React, { useState} from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { createEntry } from '../../graphql/mutations'

type CreateEntryProps = {
  pid?: string;
}
const CreateEntry : React.FC<CreateEntryProps> = ({ pid }) => {
  const [entryContent, setEntryContent] = useState("")

  async function addEntry() {
    const entryDetails = {
      content: entryContent,
      postID: pid
    };
    try {
      if (entryContent === "") return
      await API.graphql(graphqlOperation(createEntry, {input: entryDetails}))
      setEntryContent("")
    } catch (err) {
      console.log('error creating entry:', err)
    }
  }

  return(
    <React.Fragment>
      <input
        type="text"
        value={entryContent}
        placeholder={"enter entry content"}
        onChange={e => setEntryContent(e.target.value)}
      />
      <button
        onClick={addEntry}
      >
        Submit Entry
      </button>
    </React.Fragment>
  )
}

export default CreateEntry;
