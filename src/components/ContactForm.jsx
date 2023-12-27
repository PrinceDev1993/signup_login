import React from 'react'
import "./ContactFormstyles.css"
const ContactForm = () => {
  return (
    <div className='form'>
      <form action="">
        <label htmlFor="">Your name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea name="" id="" cols="30" rows="10" placeholder='Type your message here'></textarea>
        <button className='btn'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm