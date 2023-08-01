import './Property.css';

function Property({ name, rating, price }) {
  return (
    <div className="Property">
      <h2>{name}</h2>
      <h3>${price}/night</h3>
      <h4>{rating}&#11088;</h4>
    </div>
  );
}

export default Property;
