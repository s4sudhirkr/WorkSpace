import * as ActionTypes from './ActionType';
import { DISHES } from '../../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }

});
// cretaing thunk here 
export const fetchDishes= ()=>(dispatch) => {
dispatch(dishesLoading(true));

setTimeout(()=> {
    dispatch(addDishes(DISHES));
} , 2000);
}


export const dishesLoading= () =>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed= (errmes) => ({
    type: ActionTypes.DISHES_FAILED,
    payload : errmes
});
export const addDishes=(dishes) => ({
type: ActionTypes.ADD_DISHES,
payload: dishes
});
