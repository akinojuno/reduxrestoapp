import React from 'react';
import './App.css';
import AddNewItem from './components/AddNewItem';
import Menu from './components/Menu';
import { connect } from 'react-redux';
import CartBox from './components/CartBox';
import { Route, Link } from 'react-router-dom'


class App extends React.Component {

  render() {
    return (
      <div className="App"> 
          <Link to="/addnewItem">
            <small>Add New Item</small>
          </Link>
        <header className="App-header">
        
          
          <Route exact path="/addnewitem">
             <div className="inputContainer">
                  <AddNewItem />
             </div>
          </Route>
      

          <Menu />

          <div>
              <CartBox />
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    cart: store.cart,
    items: store.items,
    

  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setItems: items => dispatch({ type: 'SET_ITEMS', payload: items })
//   };
// };

export default connect(mapStateToProps)(App);
