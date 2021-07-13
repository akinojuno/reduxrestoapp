import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// import './AddNewItem.css'


class AddNewItem extends React.Component {
  state = {
    name: '',
    price: '',
    category: 'Food',
    image: ''
  };

  saveBtnClickHandler = () => {
    const newItem = {
      ...this.state
    };
    this.props.addItem(newItem)
  };

  render() {
    return (
    
      <div >
        <Link to="/">
            <small>Back to main menu </small> <br />
        </Link>
        Name:
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <br />
        Price:
        <input
          type="number"
          value={this.state.price}
          onChange={e => this.setState({ price: e.target.value })}
        />
        <br />
        Category:
        <select
          value={this.state.category}
          onChange={e => this.setState({ category: e.target.value })}
        >
          {this.props.categories.map(cat => {
            return <option key={cat}>{cat}</option>;
          })}
        </select>
        <br />
        Image:
        <input
          type="text"
          value={this.state.image}
          onChange={e => this.setState({ image: e.target.value })}
        />
        <br />
        <Link to="/">
        <button onClick={this.saveBtnClickHandler}>Save</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: 
    newItem => dispatch({ type: 'ADD_ITEM', payload: newItem }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem);
