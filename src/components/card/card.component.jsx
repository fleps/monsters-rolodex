import './card.styles.css'

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set2&size=250x250`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
