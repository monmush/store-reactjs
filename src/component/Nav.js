import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

 class Nav extends Component {
  render(){
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart({this.props.counter})</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {counter: state.counter}
}

export default connect(mapStateToProps)(Nav);