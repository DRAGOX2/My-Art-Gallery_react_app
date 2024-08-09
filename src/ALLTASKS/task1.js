import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
   /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
    <div>
      <div className='CE'>
        <strong > Departments</strong><br/><br/><b>CE</b><br/>     
          {props.comp} department is better than other department.
          <br/><br/><br/>
      </div>
      <div className='IT'>
        <b>IT</b><br/>
        {props.it} department is better than EC department.
        <br/><br/><br/>
      </div>
      <div className='EC' >
        <b>EC</b><br/>
        {props.ec} department is better than CE department.
        <br/><br/><br/>
      </div>
    </div>
  );
}

export default App;
