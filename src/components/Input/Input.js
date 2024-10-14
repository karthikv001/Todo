import React from 'react';
import './input.css';

const Input = () => {
  return (
    <div className='inputPage'>
       <div className='input-heading'>
        Have Question In Mind?<br/>
        Let Us Help You
        
        </div> 
        <div className='input-feild'>
            <input type='text' placeholder='Yourmail@gmail.com' />
            <button>Submit</button>
        </div>
    </div>
  )  
}

export default Input;