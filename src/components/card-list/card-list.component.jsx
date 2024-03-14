import Card from '../card/card.component';
import './card-list.style.css';

const CardList = ({ list }) => {
    return (
      <div className='card-list'>
        {list.map(monster => {
            return <Card key={monster.id} monster={monster} />
        })}
      </div>
    );
}

export default CardList;
