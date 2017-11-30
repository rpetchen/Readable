import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap'
import { Field, reduxForm, reset } from 'redux-form'
import { editComment, addComment } from '../actions/index'

class PostEntry extends Component {
constructor(props) {
    super(props);
  }



submit=()=>{
  console.log("cool")
}


renderField = ({ disabled, input, label, type, textarea, meta: { touched, error, warning } }) => {

  const textareaType = <textarea {...input} placeholder={label}  type={type} />;
  const inputType = <input {...input} placeholder={label}  type={type} disabled={disabled}/>;
  return(
  <div>
    <label>{label}</label>
    <div>
      {textarea ? textareaType : inputType}
     
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
  )
}

  render() {

  

  var {id} = this.props
  const { handleSubmit} = this.props
    return (

   		
             <form onSubmit={ handleSubmit(this.submit) }>
               
                <div>
           
                  <div>
                   <Field
                    name="body"
                    component={this.renderField}
                    type="text"
                    placeholder={"Comment Text"}
                    textarea={true}
                    validate={this.required}
                    label = "Post Body"
                    />
                    <Field
                    name="author"
                    component={this.renderField}
                    type="text"
                    placeholder={"Author"}
                    textarea={false}
                    validate={this.required}
                     label = "Author"
                    disabled = {this.props.authorAction}
                  />
                  </div>
                </div>
            
                <button type="submit">Submit</button>
              </form>
         


    );
  }
}


 
 const mapStateToProps=(state, ownProps)=>{
  return {
    initialValues: {
    body: ownProps.body,
    author: ownProps.author
  }
  }
 }

var PostForm = reduxForm({
  form: 'PostForm',
  enableReinitialize: true,
  destroyOnUnmount: false
})(PostEntry)


export default connect(mapStateToProps, {editComment, addComment})(PostForm)
