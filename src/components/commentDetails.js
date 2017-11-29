import React from 'react';
import { Panel, Button } from 'react-bootstrap'
import CommentModal from '../containers/commentModal'
import  FontAwesome from 'react-fontawesome'
import { connect } from 'react-redux';
import { voteComment } from '../actions/index'

class CommentDetail extends React.Component{
  constructor(props) {
    super(props);
   
  }

  vote(option, id){
    this.props.voteComment(option, id)
  }

render(){
var {id, body, author, timestamp, voteScore} = this.props
const date = new Date(timestamp).toString().substring(0,15)
	return (
	
	<div>

      <h3>{body}</h3>
      <h4>Comment Author: {author}</h4>
      <p>Comment creation/edit time: timestamp</p>
      <p>Vote Score for the comment: {voteScore}</p>
      <Button onClick={()=> this.props.showModal(id)}> Edit Comment </Button>
      <Button onClick={()=> this.props.deleteComment(id)} > Delete Comment </Button>


      <Button onClick={() => this.vote("upVote", id)} className = "btn" bsStyle="default" bsSize="xsmall">
        <FontAwesome
            className='fa fa-thumbs-o-up'
            name='fa-thumbs-o-up'
            size='lg'
            />
      </Button>
        <Button onClick={() => this.vote("downVote", id)} className = "btn" bsStyle="default" bsSize="xsmall">
        <FontAwesome
          className='fa fa-thumbs-o-down'
          name='fa-thumbs-o-down'
          size='lg'
          />
      </Button>
     
        <Button className = "btn modifyPostB" bsStyle="danger" bsSize="small">
         Delete
        </Button>
     </div>


		)
}
}



export default connect(null,{voteComment})(CommentDetail)
