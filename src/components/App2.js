import React from 'react';
import ReactDOM from 'react-dom';

function App2(){
    return(
        <div className="middle sec">
            <input className="em ph" id="ip1" type="text" placeholder="Email or phone number"></input><br />
            <input className="ps ph" id="ip2" type="text" placeholder="Password"></input><br />
            <button className='btn1 bt'><h2>Login</h2></button>
            <p>forgot password?</p>
            <hr />
            <button className='btn2 bt'><h2>create new account</h2></button>
       </div> 
    )
}

export default App2;