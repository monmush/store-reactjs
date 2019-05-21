import React from 'react'

const Item = (props) => {
  return (
    <div className="item flex">
      <div className="info">
        <h6>{props.name}</h6>
        <span>{'$' + props.price}</span>
      </div>

      <div>
      <a className="waves-effect waves-light btn" onClick={props.clicked} >Add to cart</a>
      </div>
    </div>
  )
}

export default Item;