const initialState = {
    counter: 0,
    items: [
        {id: 1,name:'Book',price:10},
        {id: 2, name:'Ball',price:20},
        {id: 3, name:'Shoe',price:45},
        {id:4, name:'T-shirt',price:15},
        {id:5, name:'Ice-cream',price:2}
    ],
    itemsInCart:[]
}

const reducer = (state = initialState,action) => {
    if (action.type === 'ADDTOCART'){
        console.log('Hi this is:', action.id);
        const choosenItems = state.itemsInCart.concat(state.items.filter(item => item.id === action.id));
        console.log('This is items you chose', choosenItems)
        return{
            ...state,
            counter: state.counter + 1,
            itemsInCart: choosenItems
        }
    }
    return state;
}

export default reducer;