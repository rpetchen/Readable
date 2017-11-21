import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions/index'



class PostCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  componentDidMount() {
    this.props.fetchCategories() 
}

render () {
var {categories} = this.props
if (!categories){
  return <div>Loading...</div>
}
    return (
      <div >
            <ul >
                <Link  to={`/`}>
                  <li >View All Post Categories</li >
                </Link>
                {categories.map((cat, i) =>(
                  <Link key={i} to={`/categories/${cat.name}`}>
                  <li >View Post By Category: {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</li >
                  </Link>
                  )
                 )}


            </ul>

       
      </div>
    );
    }
  }





function mapStateToProps({categories}){
  return {categories: categories}
}


export default connect(mapStateToProps, { fetchCategories})(PostCategories)