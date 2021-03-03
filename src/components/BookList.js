import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as bookActions from "../redux/actions/bookActions"
import { Table } from "reactstrap";




class BookList extends Component {
    componentDidMount() {
        this.props.actions.getBooks();
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
            {this.props.Books.map((book) => (
              <tr key={book.id}>
                <th scope="row">{book.id}</th>
                <td>{book.book_name}</td>
                
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
        Books:state.bookListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getBooks:bindActionCreators(bookActions.getBooks,dispatch)
        }
    }  
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(BookList);