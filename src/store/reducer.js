const initialState = {
    counter: 0,
    items: [
        {id: 1,name:'Book',price:10},
        {id: 2, name:'Ball',price:20},
        {id: 3, name:'Shoe',price:45},
        {id:4, name:'T-shirt',price:15},
        {id:5, name:'Ice-cream',price:2}
    ]
}

const reducer = (state = initialState,action) => {
    if (action.type === 'ADDTOCART'){
        return{
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
}

export default reducer;