// USESTATE EXAMPLES
//  ******************************************************************
// Example: Text Field (String)
import { useState } from 'react';

function MyInput() {
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type='text' value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>Reset</button>
    </>
  );
}

export default MyInput;

// Example - useState Counter
import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1)
  }

  return (
  <>
     <button onClick={handleClick}>
       You incremented me {count} times.
     </button>
   )
</>
}

export default Counter;

//  Example - Checkbox (boolean)

import { useState } from 'react';

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <label>
        <input type='checkbox' checked={null} onChange={handleChange} />I like
        this
      </label>
      <p>You {liked ? 'liked' : "didn't like"} this.</p>
    </>
  );
}

Example - Form (two variables)
import { useState } from 'react';

function Form() {
  const [firstName, setFirstName] = useState('Taylor');
  const [age, setAge] = useState(40);

  return (
    <>
      <input
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>Increment Age</button>
      <p>
        Hello, {firstName}. You are {age} now.
      </p>
    </>
  );
}
export default Form;

// Example-1  (Passing the Updater Function - so, +5 button works)
import { useState } from 'react';

const myComponentStyle = {
  padding: '1rem 2rem',
  margin: '.2rem 1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
};

function Counter() {
  const [age, setAge] = useState(40);

  function increment() {
    setAge(age + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        style={myComponentStyle}
        onClick={() => {
          increment();
          increment();
          increment();
          increment();
          increment();
        }}
      >
        Plus 5
      </button>
      <button
        style={myComponentStyle}
        onClick={() => {
          increment();
          increment();
        }}
      >
        Plus 2
      </button>
    </>
  );
}

export default Counter;

// Example -1: Form(object) -  Updating object rather than mutating

import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'barbara@sculpture.com',
  });

  return (
    <>
      <label>
        First Name:
        <input
          type='text'
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
      </label>

      <label>
        Last Name:
        <input
          type='text'
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value,
            });
          }}
        />
      </label>

      <label>
        Email:
        <input
          type='text'
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {' '} {form.lastName} {' '} ({form.email})
      </p>
    </>
  );
}


