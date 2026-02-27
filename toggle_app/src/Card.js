

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h1>This is a card value is {props.num}</h1>
        <p>This card is :{props.num>50? "red" : "green"}</p>
      </div>
    </div>
  );
}

export default Card;