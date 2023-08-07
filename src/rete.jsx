function Rete(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <p>{props.author}</p>
      <p>Likes:{props.likes}</p>
      <button onClick={props.action}>+1</button>
    </div>
  );
}

export default Rete;
