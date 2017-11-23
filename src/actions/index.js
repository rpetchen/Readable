import _ from 'lodash';

export const FETCH_POSTS = 'fetch_posts'
export const VOTE_POST = 'vote_post'
export const CAT_POST = 'cat_post'
export const FETCH_CAT = 'fetch_cat'
export const FETCH_POST = 'fetch_post'
export const FETCH_COMMENTS = "fetch_comments"
const url = `http://localhost:3001`;

export function fetchPosts() {
const ext = `/posts`
let request =  fetch(url+ext, { headers: { 'Authorization': 'ryanP' },
                 credentials: 'include' } )
      .then( (res) => { return(res.json()) })
      .then((data) => {
       var obj = {}
       for (var i =0; i < data.length; i++){
       	obj[data[i].id] = data[i]
       }
       return obj
       })


	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function votePost(id, option){
const ext = `/posts/${id}`
let request =  fetch(url+ext,  {method: "POST",
				 headers: { 'Authorization': 'ryanP',
    						"Content-Type": "application/json" },
                 credentials: 'include',
                 body: JSON.stringify({option}) }) 
      .then( (res) => { return res.json()})
      .then((data) => {
       return data
       })


	return {
		type: VOTE_POST,
		payload: request
	};
}

export function categoriesPost( category){
const ext = `/${category}/posts`

let request = fetch(url+ext,  {method: "GET",
         headers: { 'Authorization': 'ryanP',
                "Content-Type": "application/json" },
                 credentials: 'include'}) 
      .then( (res) => { return res.json()})
      .then((data) => {
      console.log(data)
        var obj = {}
       for (var i =0; i < data.length; i++){
        obj[data[i].id] = data[i]
       }
       return obj
       })

return {
    type: CAT_POST,
    payload: request
  };
}

export function fetchCategories() {
const ext = `/categories`
let request =  fetch(url+ext, { headers: { 'Authorization': 'ryanP' },
                 credentials: 'include' } )
      .then( (res) => { return(res.json()) })
      .then((data) => {
      
      return data.categories
       })

return {
    type: FETCH_CAT,
    payload: request
  };
  
}

export function fetchPost(id) {
const ext = `/posts/${id}`
let request =  fetch(url+ext, { headers: { 'Authorization': 'ryanP' },
                 credentials: 'include' } )
      .then( (res) => { return(res.json()) })
      .then((data) => {
      return data
       })


  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchComments(id){
  const ext = `/posts/${id}/comments`
  let request =  fetch(url+ext, { headers: { 'Authorization': 'ryanP' },
                 credentials: 'include' } )
      .then( (res) => { return(res.json()) })
      .then((data) => {
        return data
       })


  return {
    type: FETCH_COMMENTS,
    payload: request
  };
}


