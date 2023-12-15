import React from 'react';


const Form = () => {
  return (

    <div style={{position:'relative'}}>
        <form  >
            <input 
                name='todos' type='text' id='todos'
            style=
            {{
                position:'absolute', 
                top: '-120px', 
                left: '24rem', 
                // name:'text' ,
                // type:'text', 
                // placeholder:'Create new todo item',
                
            }}
            />
            
            <button style=
            {{
                position:'absolute', 
                left: '48rem', 
                marginTop: 10, 
                top: '-123px',
                width: '60px',
                height: '28px',
                color: 'white',
                backgroundColor: 'blue',
                borderRadius: '5px',
                borderStyle: 'none',
                marginBottom:'10px'
            }}
            >
                Add
            </button>
        </form>
    
    </div>
  )
}

export default Form