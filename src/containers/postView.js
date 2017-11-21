import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions/index'


import {  Nav, NavItem } from 'react-bootstrap'

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id) 
}

render () {
var {post} = this.props
if (!post){
  return <div>Loading...</div>
}
    return (
      <div >
         <p> {post} </p>
       
      </div>
    );
    }
  }





function mapStateToProps({post}){
  return {post: post}
}


export default connect(mapStateToProps, { fetchPost})(PostDetails)