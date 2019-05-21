import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Component {
    componentDidMount(){
        console.log('This is the new state', this.props.itemsInCart);
    }
  render() {
    const itemsInCartList = this
      .props
      .itemsInCart
      .map(iic => {
        return (
          <div className="item">
            <div className="info">
              <h6>{iic.name}</h6>
              <span>{'$' + iic.price}</span>
            </div>
          </div>
        )
      })

      const price = this.props.itemsInCart.map(item => item.price);
      const priceReducer = (accumulator, currentValue) => accumulator + currentValue;
      const totalPrice = price.reduce(priceReducer,0);

    return (
      <div>
        <h2>This is a shopping cart</h2>
        {itemsInCartList}
        <hr/>
        <p className="center">Total: ${totalPrice}</p>
      </div>
    )

  }
}

const mapStateToProps = state => {
  return {itemsInCart: state.itemsInCart}
}
export default connect(mapStateToProps)(Cart);