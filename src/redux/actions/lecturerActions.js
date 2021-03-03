import * as actionTypes from './actionTypes'
import axios  from "axios";


export function getLecturerList(lecturer){
    return {type:actionTypes.GET_LECTURER_LIST,payload:lecturer}
}

export function getLecturers() {
    return function (dispatch) {
        //return axios.get(`http://localhost:3000/api/${this.props.currentCategory}`)
      return axios.get("http://localhost:3000/api/lecturer")

        .then(({data}) =>{
            dispatch(getLecturerList(data))
        })
    }
}