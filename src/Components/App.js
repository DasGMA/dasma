import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Projects from '../Components/Projects';
import Resume from '../Components/Resume';
import HomePage from '../Components/HomePage';

export default function App() {
  return (
    <>
    <Navigation />
      <main>
        <Switch>
          <Route exact path = '/' component = { HomePage } />
          <Route path = '/projects' component = { Projects } />
          <Route path = '/resume' component = { Resume } />
        </Switch>
      </main>
    <Footer />
  </>
  );
}

