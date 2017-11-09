import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import  FontAwesome from 'react-fontawesome'

const PostListItem = ({title, body, author, commentCount, voteScore, id}) => (

  <li className = "list-group-item">
 
  
    <h4>{title}</h4>
    
    <p>Author: {author}</p>

    <p>{body}</p>

    <ul className = "postItem">
    	<li>Vote Score: {voteScore} 
    	<Button className = "btn" bsStyle="default" bsSize="xsmall">
 		 <FontAwesome
        	className='fa fa-thumbs-o-up'
        	name='fa-thumbs-o-up'
        	size='1x'
        	/>
		</Button>
		<Button className = "btn" bsStyle="default" bsSize="xsmall">
 		 <FontAwesome
        	className='fa fa-thumbs-o-down'
        	name='fa-thumbs-o-down'
        	size='1x'
        	/>
		</Button>

		<Button className = "btn modifyPostB" bsStyle="danger" bsSize="small">
 		 Delete
		</Button>
		<Button className = "btn modifyPostB" bsStyle="primary" bsSize="small">
 		 Edit
		</Button>
    	</li>
    	
    </ul>
  
  </li>
);



export default PostListItem