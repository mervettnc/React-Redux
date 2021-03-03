import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as lecturerActions from "../redux/actions/lecturerActions"
import { Table } from "reactstrap";




class LecturerList extends Component {
    componentDidMount() {
        this.props.actions.getLecturers();
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
            {this.props.Lecturers.map((lecturer) => (
              <tr key={lecturer.id}>
                <th scope="row">{lecturer.id}</th>
                <td>{lecturer.lecturer_name}</td>
                
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
        Lecturers:state.lecturerListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getLecturers:bindActionCreators(lecturerActions.getLecturers,dispatch)
        }
    }  
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(LecturerList);