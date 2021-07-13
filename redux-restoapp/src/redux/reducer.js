import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';

const initialState = {
  categories: ['Food', 'Drink', 'Dessert'],
  items: [
    {
        id: uuidv4(),
        name: "Burger", 
        price: 50, 
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
    },
    {
      id: uuidv4(),
        name: "Pizza", 
        price: 100, 
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
    },
    {
        id: uuidv4(),
        name: "Fries", 
        price: 25, 
        category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
    },
    {
        id: uuidv4(),
        name: "Coffee", 
        price: 35, 
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
    },
    {
      id: uuidv4(),
        name: "Iced Tea", 
        price: 45, 
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
    },
    {
        id: uuidv4(),
        name: "Hot Tea", 
        price: 45, 
        category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
    },
  ],
  cart: [],
  total: 0
};



const solveTotal = (array) => {
  let total = 0;
  array.forEach( cartItem => {
    cartItem.subtotal = cartItem.price * cartItem.quantity 
    total += cartItem.subtotal; 
  });

  return total;
}

const reducer = (state = initialState, action) => {
  let item;
  let cartCopy;
  let total;
  switch (action.type) {
    case 'ADD_ITEM':
      let newItem = action.payload;
      newItem.id = uuidv4();
      let itemsCopy = [newItem, ...state.items];
      return {
        ...state,
        items: itemsCopy
      };
    case 'ADD_TO_CART':
          item = action.payload;
          item.quantity = 0;
          cartCopy = cloneDeep(state.cart);
          let exists = false;

              cartCopy = cartCopy.map( cartItem => {
                  if(cartItem.id === item.id) {
                      cartItem.quantity++;
                      exists = true;
                  }

                  return cartItem;
              });
              
              if(exists === false) {
            
                item.quantity = 1;
                cartCopy.push(item);
              }
          
              total = solveTotal(cartCopy);


              console.log(total)
              
              return {
                  ...state,
                  cart: cartCopy,
                  total: total
              }
    case 'CHANGE_QUANTITY':
        let operation = action.payload.operation;
        item = action.payload.item;

        if(operation === 'minus') {
            if( item.quantity > 0 ){
              item.quantity--;
            } else {
              return state;
            }
              
        } else {
            item.quantity++;
        }

        

        cartCopy = [...state.cart];

        let updatedCart = cartCopy.map( cartItem => {
            return cartItem.id === item.id ? item : cartItem
        });

        total = solveTotal(updatedCart);

        return {
          ...state,
          cart: cloneDeep(updatedCart),
          total: total
      }

    case 'DELETE_ITEM':

      // alert(action.payload);
        let cartClone = cloneDeep(state.cart)
        let newCart = cartClone.filter(
          cart => cart.id !== action.payload
        );

        total = solveTotal(newCart);
        return {
          ...state,
          cart: cloneDeep(newCart),
          total: total
         
        };

        case 'DELETE_MENU':

          // alert(action.payload);
            let menuClone = cloneDeep(state.items)
            let newMenu = menuClone.filter(
              item => item.id !== action.payload
            );
    
            // total = solveTotal(newCart);
            return {
              ...state,
              items: cloneDeep(newMenu),
              // total: total
             
            };

    default:
      return state;
  }
};

export default reducer;
