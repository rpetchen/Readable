import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { editComment } from '../actions/index'

class CommentModal extends Component {
constructor(props) {
    super(props);
  }



submit = (values) => {
    // print the form values to the console
    this.props.editComment(this.props.id, values, ()=>{this.props.resetForn()})
    
    this.props.close()

}

required = value => value ? undefined : 'Required'
renderField = ({ input, label, type, textarea, meta: { touched, error, warning } }) => {

  const textareaType = <textarea {...input} placeholder={label}  type={type} />;
  const inputType = <input {...input} placeholder={label}  type={type} />;
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

   		<Modal show={this.props.showModal} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>{id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <form onSubmit={ handleSubmit(this.submit) }>
               
                <div>
                 <label>Comment Body</label>
                  <div>
                   <Field
                    name="body"
                    component={this.renderField}
                    type="text"
                    placeholder={"Comment Text"}
                    textarea={true}
                    validate={this.required}

                    
                    />
                  </div>
                </div>
            
                <button type="submit">Submit</button>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>Close</Button>
          </Modal.Footer>
        </Modal>


    );
  }
}


 
 const mapStateToProps=(state, ownProps)=>{
  return {
    initialValues: {
    body: ownProps.body
  }
  }
 }

var CommentForm = reduxForm({
  form: 'CommentModal',
  enableReinitialize: true,
})(CommentModal)


export default connect(mapStateToProps, {editComment})(CommentForm)

