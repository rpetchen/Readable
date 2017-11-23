import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, fetchComments } from '../actions/index'
import PostDetail from '../components/postDetail'
import CommentDetail from '../components/commentDetails'
import CommentModal from '../containers/commentModal'

import {  Nav, NavItem, ListGroup, ListGroupItem, Panel   } from 'react-bootstrap'

class PostDetails extends Component {
 constructor(props) {
    super(props);
    this.state = {
      showModal : false
    }
  }

showModal=(e)=>{
  this.setState({showModal : true})
}

closeModal=()=>{
this.setState({showModal : false})
}

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id) 
    this.props.fetchComments(this.props.match.params.id) 

}

render () {

var {post} = this.props
var {comments} =this.props

if (!post){
  return <div>Loading...</div>
}
    return (

      <div >
      <CommentModal close={this.closeModal} showModal={this.state.showModal}/>
      <PostDetail {...post} />
      <Panel header="Comments" bsStyle="info">
      { (comments.length > 0) ?  
      <ListGroup>
      {comments.map((c, i)=> <ListGroupItem> <CommentDetail {...c} showModal={this.showModal}/> </ListGroupItem> )}
      </ListGroup> :
      <h2> No Comments!</h2> }
      </Panel>
      </div>
    );
    }
  }





 const mapStateToProps=({posts, comments}, ownProps)=>(
  {post: posts[ownProps.match.params.id],
  comments: comments}
)


export default connect(mapStateToProps, { fetchPost, fetchComments})(PostDetails)