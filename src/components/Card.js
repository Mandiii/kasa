function Card(props) {
  return (
    <div className="card" style={{backgroundImage: `url(${props.coverImg}), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)`}}>
        <h3>{props.title}</h3>
    </div>
  );
}

export default Card;
