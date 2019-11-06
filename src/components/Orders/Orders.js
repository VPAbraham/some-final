import React, { Component } from 'react';
import './Orders.css';
import { getOrders } from '../../apiCalls';
import { setOrders } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteOrder } from '../../apiCalls';


class Orders extends Component {
  constructor(props) {
    super();
    this.props = props
  }

  async componentDidMount() {
    let { setOrders } = this.props
    try {
      const orderData = await getOrders()
      await console.log(orderData)
      await setOrders(orderData.orders)
    } catch (err) {
      console.error('Error fetching:', err)
    }
  }

  render() {

    const delOrderCard = (e) => {
      console.log(e)
      return e
    }

    const orderEls = this.props.orders.map(order => {
      return (
        <div key={Date.now()} className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li>{ingredient}</li>
            })}
          </ul>
          <button onClick={(() => deleteOrder(order))}> Delete order </button>
        </div>
      )
    });


    return (
      <section>
        {orderEls.length ? orderEls : <p>No orders yet!</p>}
      </section>
    );
  }
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);