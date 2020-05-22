import React from 'react';
import { Router } from '@reach/router';
import CreatePost from './CreatePost';
import ViewPost from './ViewPost';

const App = () => {
  return (
    <Router basepath="/app">
      <CreatePost path="/create" />
      <ViewPost path="/view/:pid" />
    </Router>
  )
}

export default App;
