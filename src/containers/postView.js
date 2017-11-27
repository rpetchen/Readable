import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, fetchComments, fetchComment } from '../actions/index'
import PostDetail from '../components/postDetail'
import CommentDetail from '../components/commentDetails'
import CommentModal from '../containers/commentModal'

import {  Nav, NavItem, ListGroup, ListGroupItem, Panel, Button  } from 'react-bootstrap'

class PostDetails extends Component {
 constructor(props) {
    super(props);
    this.state = {
      showModal : false,
      comment: ''
    }
  }

editComment=(id)=>{
  this.props.fetchComment(id, (data)=>{
    this.setState({comment: data,
                  commentId: id,
                   showModal: true})
  })
}

closeModal=()=>{
this.setState({
  showModal : false,
  comment: '',
  commentId: ''})
}

createComment=()=>{
this.setState({
  showModal : true })
}

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id) 
    this.props.fetchComments(this.props.match.params.id) 

}

render () {

var {post} = this.props
var {comments} =this.props
const myComments = []

if (!post){
  return <div>Loading...</div>
}
    return (

      <div >
      <CommentModal close={this.closeModal} body={this.state.comment.body} author={this.state.comment.author} showModal={this.state.showModal} id={this.state.commentId}/>
      <PostDetail {...post} />

      <Panel header="Comments" bsStyle="info">
      { (Object.keys(comments).length > 0) ?  
      <ListGroup>
      {myComments.concat(Object.values(comments))
        .sort((a,b)=> {
        return b.voteScore - a.voteScore})
        .map((c, i)=> <ListGroupItem> <CommentDetail {...c} showModal={this.editComment}/> </ListGroupItem> )}
      </ListGroup> :
      <h2> No Comments!</h2> }

     
      <Button className = "btn modifyPostB" bsStyle="info" bsSize="small" onClick={this.createComment}>
        Add Comment
      </Button>
      </Panel>
      </div>
    );
    }
  }





 const mapStateToProps=({posts, comments}, ownProps)=>(
  {post: posts[ownProps.match.params.id],
  comments: comments}
)


export default connect(mapStateToProps, { fetchPost, fetchComments, fetchComment})(PostDetails)