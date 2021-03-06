import { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'contact',
      data: { name, email, message },
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
    alert('Message Sent.');
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div className='contact'>
      <form id='contact-form' onSubmit={handleSubmit} method='POST'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            aria-describedby='emailHelp'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            className='form-control'
            rows='5'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          disabled={!name || !email || !message}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
