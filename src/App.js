//import logo from './logo.svg';
import './App.css';
// import First from './components/First';
// import Nav from './components/Nav';
// import Content from './components/Content';
import Home from './components/Home'
// import Footer from './components/Footer';
import Car from './components/Car';
import Counter from './components/Counter';
function App() {
  // var a=8;

  // const x=15;
  // let text="Goodbye";
  // if(x<10){
  //   text="Hello";
  // }
  // const myElement=<h1>{text}</h1>

  const carInfo={name : "Ford" , model :"Mustang"};
  const arr =[4,2,"hii"]
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <>
    // Hello
    // <h1> Hellloooooo</h1>
    // <h1> Vidhi Sharma </h1>
    // <h1> hello a is {a} </h1>
    // </>

    // <div className="App">
    //   <>
    // {  myElement }
    // </>
    // </div>
    
    // <>
    // <First></First>
    // <h1>Helloooo</h1>
    // </>

    // <>
    // <Nav/>
    // <Content/>
    // <Footer/>
    // <First/>
    // <h1>Haello there</h1>
    // </>

    // <>
    // <Home></Home>
    // <Footer></Footer>
    // </>

    // <>
    // <Car></Car>
    // </>

    <>
    {/* <Home car ="maruti"/> */}
    {/*<Home car = {carInfo} bike = {arr}/>*/}
    <Counter></Counter> 
    </>
    
  );
}

export default App;
