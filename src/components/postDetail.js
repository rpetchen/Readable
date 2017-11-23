import React from 'react';
import { Panel } from 'react-bootstrap'
const PostDetail=({id, title, body, author, timestamp, voteScore})=>{

const date = new Date(timestamp).toString().substring(0,15)

	return (
	
	<Panel header={`Post Title: ${title}`} style={{overflowWrap: 'break-word'}} bsStyle="primary">
      <h2>Body:</h2>
      <h3>{body}</h3>
      <h3> Author: {author}</h3>
      <h4>Creation Date: {date}</h4>
      <h4>Vote Score: {voteScore}</h4>
     </Panel>


		)
}


export default PostDetail

