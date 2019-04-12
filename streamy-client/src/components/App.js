import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './stream/StreamList';
import StreamEdit from './stream/StreamEdit';
import StreamCreate from './stream/StreamCreate';
import StreamWatch from './stream/StreamWatch';
import StreamUpdate from './stream/StreamUpdate';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/new" exact component={StreamCreate} />
        <Route path="/stream/view" exact component={StreamWatch} />
        <Route path="/stream/update" exact component={StreamUpdate} />
        <Route path="/stream/edit/:id" exact component={StreamEdit} />
      </Router>
    </div>
  );
};

export default App;
