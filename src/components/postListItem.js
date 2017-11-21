import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-bootstrap'
import  FontAwesome from 'react-fontawesome'
import { votePost } from '../actions/index'



class PostListItem extends Component {
 
 vote(option){
  this.props.votePost(this.props.id, option)
 }

 render() {

 var {title, author, body, voteScore, commentCount, id } = this.props

 return (
  <li className = "list-group-item">
    <Link key = {id} to={`/post/${id}`}>
    <h4>{title}</h4>
    </Link>
    <p>Author: {author}</p>
    
    <p>{body}</p>

    <ul className = "postItem">
    	<li>Vote Score: {voteScore}
    	
    	<Button onClick={() => this.vote("upVote")} className = "btn" bsStyle="default" bsSize="xsmall">
 		 <FontAwesome
        	className='fa fa-thumbs-o-up'
        	name='fa-thumbs-o-up'
        	size='lg'
        	/>
		</Button>
		<Button onClick={() => this.vote("downVote")} className = "btn" bsStyle="default" bsSize="xsmall">
 		 <FontAwesome
        	className='fa fa-thumbs-o-down'
        	name='fa-thumbs-o-down'
        	size='lg'
        	/>
		</Button>
		</li>
		<li className="commentText">
		Comments: {commentCount}
		</li>
		<li>
        <Button className = "btn modifyPostB" bsStyle="danger" bsSize="small">
         Delete
        </Button>
        <Link to ="/asdf">
		<Button className = "btn modifyPostB" bsStyle="info" bsSize="small">
 		 Edit Post
		</Button>
        </Link>
    	</li>
    </ul>
  
  </li>
    );
  }
}



export default connect(null, { votePost })(PostListItem )