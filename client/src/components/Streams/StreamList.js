import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderAdnin(stream){
    if (stream.userId === this.props.currentUserId){
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary"> Edit </Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative"> Delete </Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdnin(stream)}
          <i className="large middle alligned icon camera" />
          <div className="content">
            <Link className="header" to={`streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">
              {stream.description}
            </div>
          </div>          
        </div>
      )
    })
  }

  renderCreate() {
    if(this.props.isSignedIn){
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">Create Stream</Link>
        </div>
      )
    }
  }

  render() {

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToPtops = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToPtops, { fetchStreams })(StreamList)
