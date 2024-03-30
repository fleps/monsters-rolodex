import { Monsters } from '../../App';
import Card from '../card/card.component';
import './card-list.style.css';

type CardListProps = {
  list: Monsters[];
}

const CardList = ({ list }: CardListProps) => {
  return (
    <div className='card-list'>
      {list.map((monster) => {
          return <Card key={monster.id} monster={monster} />
      })}
    </div>
  );
}

export default CardList;
