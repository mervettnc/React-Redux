import * as actionTypes from './actionTypes'

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY,payload:category}
}

export function getCategories(categories){
    return {type:actionTypes.GET_CATEGORIES_SUCCESS,payload:categories}
}