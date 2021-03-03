import * as actionTypes from './actionTypes'
import axios  from "axios";


export function getBookList(book){
    return {type:actionTypes.GET_BOOK_LIST,payload:book}
}

export function getBooks() {
    return function (dispatch) {
        //return axios.get(`http://localhost:3000/api/${this.props.currentCategory}`)
      return axios.get("http://localhost:3000/api/book")

        .then(({data}) =>{
            dispatch(getBookList(data))
        })
    }
}