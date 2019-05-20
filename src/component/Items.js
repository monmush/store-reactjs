import React,{Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';

class Items extends Component{ 
    componentDidMount(){
        console.log(this.props.items)
      
    }
    render(){

        const printItems = this.props.items.map(item => {
            return(<div>
                <Item name = {item.name} price = {item.price} clicked={this.props.addToCart} />
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
        addToCart: ()=>dispatch({type:'ADDTOCART'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);