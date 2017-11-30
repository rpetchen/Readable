import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, fetchComments, fetchComment, deleteComment, voteComment, votePost } from '../actions/index'
import PostDetail from '../components/postDetail'
import CommentDetail from '../components/commentDetails'
import CommentModal from '../containers/commentModal'

import {  Nav, NavItem, ListGroup, ListGroupItem, Panel, Button  } from 'react-bootstrap'

class PostDetails extends Component {
 constructor(props) {
    super(props);
    this.state = {
      showModal : false,
      comment: ""
    }
  }

editComment=(id)=>{
  this.props.fetchComment(id, (data)=>{
    this.setState({comment: data,
                  commentId: id,
                  showModal: true,
                  disableAuthor: true,
                  action: 'edit'})
  })
}

closeModal=(callback)=>{
this.setState({
  showModal : false,
  comment: '',
  commentId: '',
  disableAuthor: '',
  action: 'close'})

}


deleteComment=(id)=>{
this.props.deleteComment(id)
}

createComment=()=>{
this.setState({
  showModal : true,
  commentAction: "create",
  action: 'create' })
}

votePost=(id, option)=>{
  this.props.votePost(id, option)
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
      <CommentModal close={this.closeModal} parentID = {this.props.post.id} action={this.state.action} authorAction={this.state.disableAuthor} body={this.state.comment.body} author={this.state.comment.author} showModal={this.state.showModal} id={this.state.commentId}/>
      <PostDetail votePost = {this.votePost} {...post} />

      <Panel header="Comments" bsStyle="info">
      { (Object.keys(comments).length > 0) ?  
      <ListGroup>
      {myComments.concat(Object.values(comments))
        .sort((a,b)=> {
        return b.voteScore - a.voteScore})
        .map((c, i)=> <ListGroupItem> <CommentDetail vote={voteComment
        } {...c} showModal={this.editComment} deleteComment={this.deleteComment}/> </ListGroupItem> )}
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


export default connect(mapStateToProps, { fetchPost, fetchComments, fetchComment, deleteComment, voteComment, votePost})(PostDetails)