import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as classroomActions from "../redux/actions/classroomActions"
import { Table } from "reactstrap";




class ClassroomList extends Component {
    componentDidMount() {
        this.props.actions.getClassroom();
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
            {this.props.Classrooms.map((classroom) => (
              <tr key={classroom.id}>
                <th scope="row">{classroom.id}</th>
                <td>{classroom.class_name}</td>
                
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
        Classrooms:state.classroomListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getClassroom:bindActionCreators(classroomActions.getClassroom,dispatch)
        }
    }  
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ClassroomList);