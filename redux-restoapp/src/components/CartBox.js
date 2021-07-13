import React from 'react';
import { connect } from 'react-redux';
import CartItems from './CartItems';


class CartBox extends React.Component {
  render() {
    return(
      <div className="cartBox">
         {
           this.props.cart.length > 0 ? 
           <div className="cartMenu">
                <h2 className="cartHeader">Cart</h2>
                    {this.props.cart.map(item => {
                      return <CartItems key={item.name} items={item} />;
                    })}
                <div className="total">
                    Total: Php{this.props.total}
                </div>
              </div>
            : null
         }
          
    </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    cart: store.cart,
    categories: store.categories,
    total: store.total
  };
};


export default connect(mapStateToProps)(CartBox);