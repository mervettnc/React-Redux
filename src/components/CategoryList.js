import React, { Component } from 'react'
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../redux/actions/categoryActions"

class CategoryList extends Component {
  
selectCategory= category =>{
    this.props.actions.changeCategory(category)
    console.log(this.props.currentCategory)
}
    render() {
        //console.log(this.props.currentCategory.currentCategory[0].categoryName)
        //console.log(this.props.categories[0].categoryName)
        return (
            <div>
                
                {/* <h1>{this.props.currentCategory.categoryName}</h1> */}
                <h3>Categories </h3>
                
                {/* {this.props.categories.map((e,i)=>{
                    return <h1>{e.categoryName}</h1>
                })}
                <h4>{this.props.categories[0].categoryName}</h4> */}


                <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem  active={category.categoryId === this.props.currentCategory.categoryId}
           
              onClick={() => this.selectCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
              {/* <h5>Seçili Kategori: {this.props.currentCategory.categoryName}</h5> */}
            </div>
        )
    }
}
function mapStateToProps(state)
{
  return{
      currentCategory:state.changeCategoryReducer,
      categories:state.getCategoryReducer
  }  
}

function mapDispatchToProps(dispatch) {
  return{
      actions:{
          changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch)
      }
  }  
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)