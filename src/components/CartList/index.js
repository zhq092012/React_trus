import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../actions/cart";
class CartList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cartList.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={this.props.decrement.bind(this, item.id)}>
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button onClick={this.props.increment.bind(this, item.id)}>
                    +
                  </button>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
const mapState = state => {
  return {
    cartList: state.cart
  };
};
// const mapDispatch = dispatch => {
//   return {
//     add: id => dispatch(increment(id)),
//     reduce: id => dispatch(decrement(id))
//   };
// };
// export default connect(mapState, mapDispatch)(CartList);
export default connect(mapState, { increment, decrement })(CartList);
