import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as studentActions from "../redux/actions/studentActions"
import { Table,Button, Modal,ModalBody,ModalFooter,ModalHeader } from "reactstrap";




class StudentList extends Component {
  state={
    Students:[],
    modal: false,
    edit: {
      studentName: null,
      studentId: null
    }
  
  }
  

    onChangeName = this.onChangeName.bind(this);
    saveStudent = this.saveStudent.bind(this);
    saveStudentCallback = this.saveStudentCallback.bind(this);
    editStudent = this.editStudent.bind(this);
    toggle= this.toggle.bind(this);
    
    componentDidMount() {
      
        this.props.actions.getStudents();
      
    }

  
    editStudent(id,data) {

      this.setState({ 
        ...this.state, 
        edit: { studentName: data, studentId: id},
        modal: true
      })
     
    }
    saveStudent(event) {
      event.preventDefault();
      let newStudents = this.state.Students;
      this.props.actions.updateStudent(this.state.edit.studentId, this.state.edit.studentName)
      this.toggle()
   
    }


    saveStudentCallback(data){
      console.log("callback", data)
      let newStudents = this.state.Students;
      console.log(newStudents)
      newStudents[this.state.Students.findIndex((item)=> item.id == data.id)].student_name = data.studentName
      console.log(newStudents)
    }
    
    onChangeName(e) {
      this.setState({
        ...this.state,
        edit: {
          ...this.state.edit,
          studentName: e.target.value
        }
      });
    }
    toggle= this.toggle.bind(this);
        
    
            toggle() {
                this.setState({
                  modal: !this.state.modal,
                  
                });
              }
              


    
    render() {
      
     
        return (
        
            <div>
                <h3>Table - <Badge color="secondary" ml-3 >{this.props.currentCategory.categoryName}</Badge></h3>
                <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th></th>
              <th></th>

             
            </tr>
          </thead>
          <tbody>
          {/* <Deneme/> */}
         

            {this.props.Students.map((student) => (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.student_name}</td>
                <td> <Button onClick={() => this.props.actions.deleteStudent(student.id)}  outline color="danger" >Delete</Button></td>
                <td> <Button onClick={()=> this.editStudent(student.id,student.student_name)}  outline color="info" >Edit</Button></td>

              </tr>
            ))}
          </tbody>

        </Table>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit Form </ModalHeader>
          <ModalBody>
          <label htmlFor="student_name">Name</label>
              <input
                type="text"
                className="form-control"
                id="student_name"
                required
                value={this.state.edit.studentName}
                onChange={this.onChangeName}
                student_name="student_name"
              />
          </ModalBody>
          <ModalFooter>
          <button  
             onClick={this.saveStudent} 
            //onClick={()=>this.props.doThis()}
            className="btn btn-success">
              Save
            </button>
            {/* <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '} */}
            <Button color='secondary' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentCategory:state.changeCategoryReducer,
        Students:state.studentManagementReducer.Students
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getStudents:bindActionCreators(studentActions.getStudents,dispatch),
            deleteStudent:bindActionCreators(studentActions.deleteStudent,dispatch),
            updateStudent:bindActionCreators(studentActions.updateStudent,dispatch)
            
        }
    }  
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(StudentList);

