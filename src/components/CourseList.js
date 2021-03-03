import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as courseActions from "../redux/actions/courseActions"
import { Table } from "reactstrap";




class CourseList extends Component {
    componentDidMount() {
        this.props.actions.getCourses();
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
            {this.props.Courses.map((course) => (
              <tr key={course.id}>
                <th scope="row">{course.id}</th>
                <td>{course.course_name}</td>
                
              </tr>
            ))}
          </tbody>
        </Table>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentCategory:state.changeCategoryReducer,
        Courses:state.courseListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getCourses:bindActionCreators(courseActions.getCourses,dispatch)
        }
    }  
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(CourseList);