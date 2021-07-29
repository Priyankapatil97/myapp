// import logo from './logo.svg';
import "./App.css";

//JSX javascript and xml (HTML)
// JSX must be wrapped in ( ); , if it is multiline.
//JSX must have only one parent tag
function App() {
  let id = 100;
  let name = "Pratik";

  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Your Id is {id}</h2>
      <h3>(for multiline) this is important to wrap code in it</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        pariatur labore debitis ea explicabo impedit voluptatem perspiciatis
        quae et non!
      </p>
      <p>kjdhuwrhuwehfkjshjfhjewh dkefjiweiuiuwej</p>
      

    </div>
  );
}

export default App;
