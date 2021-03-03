import * as actionTypes from './actionTypes'
import axios  from "axios";


export function getClassroomList(classroom){
    return {type:actionTypes.GET_CLASSROOM_LIST,payload:classroom}
}

export function getClassroom() {
    return function (dispatch) {
        //return axios.get(`http://localhost:3000/api/${this.props.currentCategory}`)
      return axios.get("http://localhost:3000/api/classroom")

        .then(({data}) =>{
            dispatch(getClassroomList(data))
        })
    }
}