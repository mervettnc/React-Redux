import React, { Component, useDispatch } from 'react'
import {Row,Col} from 'reactstrap'
import CategoryList from '../CategoryList'
import StudentList from '../StudentListOld'
import CourseList from '../CourseList'
import ClassroomList from '../ClassroomList'
import LecturerList from '../LecturerList'
import BookList from '../BookList'
import AddStudent from '../AddStudent'
import { bindActionCreators, createStore } from "redux";

import { connect } from 'react-redux';
import * as studentActions from "../../redux/actions/studentActions"

// const store = createStore()
 class Dashboard extends Component {

    render() {
        return (
            // <Provider store={store}>

            
            <div>
                <Row>
                    <Col xs="3">        
                        <CategoryList/>

                        {this.props.currentCategory.categoryName === "Student" ? <AddStudent  />
            //   : this.state.currentCategory === "Course" ? <AddCourse/>
            //   :this.state.currentCategory === "Classroom" ? <AddClassroom/> 
            //   :this.state.currentCategory === "Lecturer" ? <AddLecturer/> 
            //   :this.state.currentCategory === "Book" ? <AddBook/> 
              :"Not Found" }
             
                    </Col>
                    <Col xs="9">
                        {this.props.currentCategory.categoryName ==="Student" ? <StudentList /> 
                        :
                        this.props.currentCategory.categoryName ==="Course" ? <CourseList /> 
                        :
                        this.props.currentCategory.categoryName ==="Classroom" ? <ClassroomList /> 
                        :
                        this.props.currentCategory.categoryName ==="Lecturer" ? <LecturerList /> 
                        :
                        this.props.currentCategory.categoryName ==="Book" ? <BookList /> 
                        
                        :"Bulunamadı"
                        }
                      
                    </Col>
                </Row>
           

            </div>
            // </Provider>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentCategory:state.changeCategoryReducer,
        studentManagement:state.studentManagementReducer
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getStudents:bindActionCreators(studentActions.getStudents,dispatch)
            
        }
    }  
  }
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
