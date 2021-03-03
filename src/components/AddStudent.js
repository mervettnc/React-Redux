import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Button,Modal,ModalBody,ModalFooter,ModalHeader} from 'reactstrap'
import { bindActionCreators } from "redux";
import * as studentActions from "../redux/actions/studentActions"


class AddStudent extends Component {
state={
    submitted: false,
    modal:false,
    studentName:"",
    Students:[],
    currentCategory:"Student"
  

}

    componentDidMount() {
        //this.props.actions.addStudent(this.state.studentName);
        //console.log(this.props.actions.addStudent(this.state.studentName));
    }
    

    onChangeName = this.onChangeName.bind(this);
    saveStudent = this.saveStudent.bind(this);
    newStudent = this.newStudent.bind(this);
    toggle= this.toggle.bind(this);



    toggle() {
      this.setState({
        modal: !this.state.modal,
        
      });
    }

    onChangeName(e) {
        this.setState({
            studentName: e.target.value
        });
      }
    
     
      saveStudent(event) {
        event.preventDefault();
        this.props.actions.addStudent(this.state.studentName)
        this.toggle()
           console.log("asdsa")
      }
   
    //   saveStudent() {
    //     var data = {
    //         studentName: this.state.studentName,
          
    //     };
    //     axios.post("http://localhost:3000/api/student",data)
    //     .then(response => {
    //         this.setState({
    //           id: response.data.id,
    //           student_name: response.data.student_name,
             
    //           submitted: true
    //         });
  
    //         console.log(response.data);
            
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
           
    // }

    newStudent(){
        this.setState({
            id:null,
            studentName:"", 
            submitted:false
        })
    }




render() {

    return (
    
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            {/* <h4>You submitted successfully!</h4> */}
            <button outline color="dark" className="btn btn-block  mt-5" onClick={this.newStudent}>
            Add - {this.state.currentCategory}
           
            </button>
          </div>
        ) : (
          <div>
        
            <Button  outline color="dark" className="btn btn-block  mt-5" onClick={this.toggle }>Add </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Form {this.state.currentCategory}  </ModalHeader>
          <ModalBody>
          <label htmlFor="student_name">Name</label>
              <input
                type="text"
                className="form-control"
                id="student_name"
                required
                value={this.state.studentName}
                onChange={this.onChangeName}
               
                student_name="student_name"
              />
          </ModalBody>
          <ModalFooter>
          <button  
             onClick={this.saveStudent} 
            className="btn btn-success">
              Save 
            </button> 
            <Button color='secondary' onClick={this.toggle}>Cancel</Button> 
            
          </ModalFooter>
        </Modal>
           
          </div>
        )}
      </div>
    );
  }
}


function mapStateToProps(state) {
    return{
        
        Students:state.studentManagementReducer,
        studentName: state.studentManagementReducer.studentName,
       
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            addStudent:bindActionCreators(studentActions.addStudent,dispatch)
        }
    }  
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(AddStudent);
