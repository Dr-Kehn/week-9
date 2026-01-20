function Greeting() {
  const name = "Kenechukwu";
  const year = new Date().getFullYear();

  return (
    <div className="greeting">
      <h1>Welcome to My React App</h1>
      <p>My name is {name}</p>
      <p>Current Year: {year}</p>
    </div>
  );
}

export default Greeting;
