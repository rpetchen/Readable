import React from 'react';
import { Panel, Button } from 'react-bootstrap'
import CommentModal from '../containers/commentModal'

class CommentDetail extends React.Component{
  constructor(props) {
    super(props);
   
  }

render(){
var {id, body, author, timestamp, voteScore} = this.props
const date = new Date(timestamp).toString().substring(0,15)
	return (
	
	<div>

      <h3>{body}</h3>
      <h4>{author}</h4>
      <p>{date}</p>
      <p>{voteScore}</p>
      <Button onClick={()=> this.props.showModal(id)}> Edit Comment </Button>
      <Button onClick={()=> this.props.deleteComment(id)} > Delete Comment </Button>
     </div>


		)
}
}


export default CommentDetail

