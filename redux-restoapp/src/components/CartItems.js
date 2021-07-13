import React from 'react';
import { connect } from 'react-redux';


const CartItems = (props) => {
    console.log()
    const { name, image, quantity } = props.items;

    const zeroQuantity = () => {
      if (quantity === 1) {
        alert(`${name}'s quantity is 0. ${name} is removed from cart!`)
        props.deleteItemBtn(props.items.id)
       
      } else {
        props.changeQuantity(props.items, 'minus')
      }
    }
    


    return(
      <div className="Menu">
        <button className="delete" onClick={() => props.deleteItemBtn(props.items.id)}>❌</button>
        <div className="cartItemContainer">
          <img src={image} width={100} alt={name} />
           <p>{name}</p> 
           <p>
                    
                    <button onClick={ zeroQuantity }> - </button> 
                    <input className="qty" type="number" value={quantity} min="1"/>
                    <button onClick={ () => props.changeQuantity(props.items, 'plus') }>+</button>
                    <br/>
                    <span>Sub-Total: Php {props.items.subtotal}</span>
                </p>
        </div>

      </div>
    );
  }

const mapStateToProps = store => {
  return{
    cart: store.cart,
    item: store.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addToCart: item => dispatch({type: 'ADD_TO_CART', payload: item}),
      changeQuantity: (item, operation) => dispatch({type: 'CHANGE_QUANTITY', payload: {item, operation}}),
      deleteItemBtn: item => dispatch({type: 'DELETE_ITEM', payload: item}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (CartItems);