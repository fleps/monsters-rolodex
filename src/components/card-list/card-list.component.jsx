import { Component } from 'react';
import Card from '../card/card.component';

import './card-list.style.css';

class CardList extends Component {
  render() {
    const { list } = this.props
    return (
      <div className='card-list'>
        {list.map(monster => {
          return (
            <Card monster={monster} />
          )
        })}
      </div>
    );
  }
}

export default CardList;
