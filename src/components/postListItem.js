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

 deletePost=(id)=>{
    this.props.deletePost(id)
 }

editPost=(id)=>{
    this.props.edit(id)
 }



 render() {

 var {title, author, body, voteScore, commentCount, id, category } = this.props

 return (
  <li className = "list-group-item">
    <Link key = {id} to={`/${category}/${id}`}>
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
		<li >
         <Button onClick={()=>{this.deletePost(id)}} className = "btn btn-danger modifyPostB">
            Delete
         </Button>

        <Link to={`/EditPost/${id}`} className="btn btn-primary modifyPostB"> Edit Post </Link>
    	</li>
    </ul>
  
  </li>
    );
  }
}



export default connect(null, { votePost })(PostListItem )