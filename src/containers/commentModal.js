import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { editComment } from '../actions/index'

class CommentModal extends Component {
constructor(props) {
    super(props);
  }


componentWillReceiveProps(nextProps) {

if (this.props.popUpState !== nextProps.popUpState) {

this.props.initialize();
}
}

submit = (values) => {
    this.props.reset()
    // this.props.editComment(this.props.id, values, ()=>{this.props.reset()})
    
    this.props.close()

}

commentAction=()=>{
  return true
  
}

close = () =>{
  this.props.close()
}

required = value => value ? undefined : 'Required Field'
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

   		<Modal show={this.props.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                    label = "Comment"
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
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{this.props.close(this.props.resetForm)}}>Close</Button>
          </Modal.Footer>
        </Modal>


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

var CommentForm = reduxForm({
  form: 'CommentModal',
  enableReinitialize: true,
  destroyOnUnmount: false
})(CommentModal)


export default connect(mapStateToProps, {editComment})(CommentForm)

