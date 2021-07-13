import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

class MenuFilter extends React.Component {
  render() {
    return (
      <nav className="MenuFilter">
        <Link to="/"><button>All</button></Link>
        
        {this.props.categories.map(cat => {
          return <Link to={"/" + cat}><button key={cat}>{cat}</button></Link>
        })}
      </nav>
    );
  }
}

export default MenuFilter;
