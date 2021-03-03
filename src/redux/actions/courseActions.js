import * as actionTypes from './actionTypes'
import axios  from "axios";


export function getCourseList(course){
    return {type:actionTypes.GET_COURSE_LIST,payload:course}
}

export function getCourses() {
    return function (dispatch) {
        //return axios.get(`http://localhost:3000/api/${this.props.currentCategory}`)
      return axios.get("http://localhost:3000/api/course")

        .then(({data}) =>{
            dispatch(getCourseList(data))
        })
    }
}