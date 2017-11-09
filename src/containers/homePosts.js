import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';
import { fetchPosts } from '../actions/index'
import PostListItem from '../components/postListItem';
import { Button, ButtonGroup } from 'react-bootstrap'

class homePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {


  	const { posts } = this.props
  	if (!posts){
  		return <div>Loading...</div>
  	}

    return (
      <div style={{maxWidth: '1000px', margin: 'auto'}}>
        <div className="navbar navbar-default" style={{backgroundColor: 'coral', borderBottom: '2px solid black'}}>
          <h2>Posting Engine</h2>
        </div>
        <div style={{ marginBottom: '15px'}}>
         <ButtonGroup>
    		<Button>Create Post</Button>
    		<Button>Middle</Button>
    		<Button>Right</Button>
  		</ButtonGroup> </div>
        <ul className= "list-group" style={{width: '75%', float: 'left'}}>
        {Object.keys(posts).map((key, post) =>{
        	var p = posts[key]
        	return <PostListItem {...p} key={p.id} />	
        })}
        </ul>

      
      </div>
    );
  }
}

function mapStateToProps({posts}){
	return {posts: posts}
}


export default connect(mapStateToProps, { fetchPosts })(homePosts)