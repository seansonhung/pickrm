import React from 'react';
import { Router } from '@reach/router';
import CreatePost from './Pages/CreatePost';
import ViewPost from './Pages/ViewPost';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFoundPage from './Pages/404';
import Layout from './layout/Layout'

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <CreatePost path="/create" />
        <ViewPost path="/view/:pid" />
        <Contact path="/contact" />
        <About path="/about" />
        <NotFoundPage default />
      </Router>
    </Layout>
  )
}
export default App;
