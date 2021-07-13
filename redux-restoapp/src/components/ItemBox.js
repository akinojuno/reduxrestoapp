import React from 'react';
import './Menu.css';
import { connect } from 'react-redux'

const ItemBox = (props) => {

 const addToCartBtn = () => {
    let cartItem = props.item;
    props.addToCart(cartItem);
  }
   
    const { name, price, image, } = props.item;

    return (
      <div>
          <button className="delete" onClick={() => props.deleteItemBtn(props.item.id)}>❌</button> 
        <div className="ItemBox">
          <img src={image} width={100} alt={name} />
          <p>{name}</p>
          <p>Php {price}</p>
        <button onClick={addToCartBtn}>Add to Cart</button>
        </div>
        
      </div>
    );
  }


  // const mapStateToProps = store => {
  //   return{
  //     // cart: store.cart,
  //     item: store.items
  //   }
  // }


const mapDispatchToProps = dispatch => {
  return {
    addToCart: cartItem => dispatch({
      type: 'ADD_TO_CART', payload: cartItem
    }),
    deleteItemBtn: item => dispatch({type: 'DELETE_MENU', payload: item})
  };
};
export default connect(null, mapDispatchToProps) (ItemBox);
