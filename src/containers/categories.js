import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories } from '../config/config.js'


import {  Nav, NavItem } from 'react-bootstrap'

const PostCategories=(props)=>{

    return (
      <div >
            <ul >
                <Link  to={`/`}>
                  <li >View All Post Categories</li >
                </Link>
              {categories.map((cat, i) =>(
                  <Link key={i} to={`/${cat}`}>
                  <li >View Post By Category: {cat}</li >
                  </Link>
                  )
                 )}


            </ul>

       
      </div>
    );
  }


export default PostCategories
