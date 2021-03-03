import * as actionTypes from './actionTypes'
import axios  from "axios";


export function getStudentList(student){
    return {type:actionTypes.GET_STUDENT_LIST,payload:student}
}

export function getStudents() {
    return function (dispatch) {
        //return axios.get(`http://localhost:3000/api/${this.props.currentCategory}`)
        
     axios.get("http://localhost:3000/api/student")

        .then(({data}) =>{
            dispatch(getStudentList(data)) 
            console.log(data)
        })
    }
}


export function postStudentAdd(student){
    return {type:actionTypes.POST_STUDENT_ADD,payload:student}
}

export function addStudent(studentName) {
 
    return function (dispatch) {
        //return axios.get(`http://localhost:3000/api/${this.props.currentCategory}`)
      return axios.post("http://localhost:3000/api/student",{student_name: studentName})

        .then(({data}) =>{
        
            dispatch(postStudentAdd(data))
        })
    }
}

export function updateStudentPut(id,student) {
    return {type:actionTypes.UPDATE_STUDENT,payload:id,student}
}

export function updateStudent (id,studentName){
return function (dispatch) {
    axios.put(`http://localhost:3000/api/student/${id}`,{student_name:studentName})
    .then(({data})=>{
        dispatch(updateStudentPut(data))
    })
}

}


//saveStudent(){
    //   let id = this.state.edit.studentId;
    //   let newStudents = this.state.Students;
    
    //   axios.put(`http://localhost:3000/api/student/${this.state.edit.studentId}`,{student_name: this.state.edit.studentName})
    //   .then(response => {
    //     //console.log(response.data);
    //     this.toggle()
    //     this.saveStudentCallback(response.data)
    
    //     console.log(this.state.Students.findIndex((item)=> item.id == id), id)
    //     newStudents[this.state.Students.findIndex((item)=> item.id == this.state.edit.studentId)].student_name = this.state.edit.studentName
    //     this.setState({ ...this.state,Students: newStudents});
    //     //this.setState({
    //     //  message: "The student was updated successfully!"
    //     //});
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    // }

export function deleteStudent(id){
    return {type:actionTypes.DELETE_STUDENT,payload:id}
}


export function deleteRow(id){
    return function (dispatch) {
      return  axios.delete(`http://localhost:3000/api/student/${id}`)
      .then(({data}) => {
  dispatch(deleteStudent(data))
      })
    }
    
  
  }