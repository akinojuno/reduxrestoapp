import React from 'react';
import { connect } from 'react-redux';
import ItemBox from './ItemBox';
import './Menu.css';
import MenuFilter from './MenuFilter';
import { Route } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <h2>Menu</h2>
        <MenuFilter categories={this.props.categories} />
        <Route exact path="/">
           {
            this.props.items.map(item => {
                return <ItemBox key={item._id} item={item} />;
              })
           }
        </Route>
        <Route exact path="/Food">
           {
            this.props.items.filter( item => {
                return item.category.indexOf('Food') !== -1
              })
              .map(item => {
                return <ItemBox key={item._id} item={item} />;
              })
           }
        </Route>
        <Route exact path="/Drink">
           {
            this.props.items.filter( item => {
                return item.category.indexOf('Drink') !== -1
              })
              .map(item => {
                return <ItemBox key={item._id} item={item} />;
              })
           }
        </Route>
        <Route exact path="/Dessert">
           {
            this.props.items.filter( item => {
                return item.category.indexOf('Dessert') !== -1
              })
              .map(item => {
                return <ItemBox key={item._id} item={item} />;
              })
           }
        </Route>
       
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    items: store.items,
    categories: store.categories
  };
};

export default connect(mapStateToProps)(Menu);
