import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./stream/StreamList";
import StreamEdit from "./stream/StreamEdit";
import StreamCreate from "./stream/StreamCreate";
import StreamWatch from "./stream/StreamWatch";
import StreamUpdate from "./stream/StreamUpdate";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/create" exact component={StreamCreate} />
        <Route path="/stream/watch" exact component={StreamWatch} />
        <Route path="/stream/update" exact component={StreamUpdate} />
        <Route path="/stream/edit" exact component={StreamEdit} />
      </BrowserRouter>
    </div>
  );
};

export default App;
