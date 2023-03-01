const Hello = (props) => {
  return (
    <div>
      <p>Hello{props.name},you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "julia"
  const age = 30
  return (
    // component  as function
    <div>
      <h1>Greetings</h1>
      <Hello name='Julia' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;