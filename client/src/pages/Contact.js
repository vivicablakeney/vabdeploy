import React, {useState, useEffect} from 'react'
import '../Styles.css/Contact.css';

// usues use state hook to create four state variables to keep track of the values entered into each input field: 
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
 
  //function is called when the form is submitted. prevents the default form submission behavior using event.preventDefault(), which would normally refresh the page.

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for your message, ${name}! We will get back to you via email or phone provided!`);
  };

  return (
    <section className="contact" id="contact">
      <div className="image">
        <img src="images/keychain.jpg" alt="" />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Stay Connected!</h3>
        <input type="text" placeholder="your name" className="box"  value={name} onChange={(event) => setName(event.target.value)} required />
        <input type="email" placeholder="your email" className="box" value={email} onChange={(event) => setEmail(event.target.value)} required  />
        <input type="number" placeholder="your number" className="box" value={number} onChange={(event) => setNumber(event.target.value)} />
        <textarea name="" placeholder="your message" id="" cols="30" rows="10" value={message} onChange={(event) => setMessage(event.target.value)}/>
        <input type="submit" value="send message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;



