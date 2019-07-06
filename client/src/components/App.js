import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from '../components/Streams/StreamCreate'
import StreamDelete from '../components/Streams/StreamDelete'
import StreamEdit from '../components/Streams/StreamEdit'
import StreamList from '../components/Streams/StreamList'
import StreamShow from '../components/Streams/StreamShow'
import Header from './Header'
import history from '../history'


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App