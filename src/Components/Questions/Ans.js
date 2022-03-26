import React from 'react';
import './Ans.css'

const Ans = () => {
    return (
        <div className='answer'>
            <p>Qus: How react works?</p>
            <p>Ans : At first react is a javaScript library.It creates user interfaces in a predictable and efficient way using declarative code.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in application, and React will efficiently update and render just the right component when the data changes.</p>
            <br></br>
            <p>Qus: How useState works?</p>
            <p>Ans : The useState is a Hook that allows a developer to have state variables in functional components. React has two types of components, the first is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.</p>
        </div>
    );
};

export default Ans;