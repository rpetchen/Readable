import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css'
import { fetchPosts, categoriesPost, deletePost } from '../actions/index'
import PostListItem from '../components/postListItem';
import { Button, ButtonGroup, DropdownButton, MenuItem, Modal } from 'react-bootstrap'
import FilterDropDown from '../components/filters.js'
import Categories from './categories.js'
import DetailModal from './detailedModal.js'
import { categories } from '../config/config.js'

class homePosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter:"timestamp",
      sortText: "Sort By",
      
      
    }
  }

  componentDidMount() {
    this.props.fetchPosts() 
}

componentWillReceiveProps(newProps){
	let { category } = newProps.match.params 
	let { path } = newProps.match
	

	if (category && category !== this.props.match.params.category){
		this.props.categoriesPost(newProps.match.params.category)
	}
	if  (path === "/" && this.props.match.params.category)	{
		this.props.fetchPosts() 
	}
}

deletePost = (id) =>{
  this.props.deletePost(id)
}

 filterSelect = (e, evt) => {
 switch(e){
  		case 'Date':
  			this.setState({filter: "timestamp",
  							sortText: e})
  				break
  		case '# Votes':
  			this.setState({filter: "voteScore", 
  							sortText: e})
  				break
  	    case '# Comments':
  	     	  this.setState({filter: 'commentCount',
  	     					sortText: e})
  	    		break
	}
}

editPost=(id)=>{
    this.props.history.push(`EditPost/${id}`)
 }


  render() {
  	var { posts } = this.props
  	var { filter } = this.state
  	const myPosts= []
  	if (!posts){
  		return <div>Loading...</div>
  	}

    return (
      <div >
        
        <div style={{ marginBottom: '15px', width: '75%'}}>
        <Link to="CreatePost">
    		<Button>Create Post</Button>
        </Link>
    		<FilterDropDown text={this.state.sortText} filterSelect={this.filterSelect} />
  	   
  		</div>
      
        <ul className= "list-group" style={{width: '75%', float: 'left'}}>
        { (Object.keys(posts).length > 0)?
         myPosts.concat(Object.values(posts))
			.sort((a,b) => { 
				
				return a[filter] < b[filter]})
			.map((p)=> <PostListItem deletePost={this.deletePost} {...p} edit={this.editPost} key={p.id} /> ):
         <li className = "list-group-item"> <h3> Add your FIRST Post!</h3></li>}
        </ul>
               
       <Categories />    
     
      </div>
    );
  }
}

function mapStateToProps({posts}){
	return {posts: posts}
}


export default connect(mapStateToProps, { fetchPosts, categoriesPost, deletePost})(homePosts)