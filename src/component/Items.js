import React,{Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';

class Items extends Component{ 
    render(){

        const printItems = this.props.items.map(item => {
            return(<div key={item.id}>
                <Item name = {item.name} price = {item.price} clicked={()=>this.props.addToCart(item.id)} />
            </div>)
        })
        return(
            <div>
                {printItems}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {items: state.items}
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (itemID)=>dispatch({type:'ADDTOCART',id:itemID})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);