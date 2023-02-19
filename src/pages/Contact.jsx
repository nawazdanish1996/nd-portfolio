import React, {useState, useRef} from 'react';
import "../css/Contact.css";
import emailjs from "@emailjs/browser";
import swal from 'sweetalert';

// sound
import useSound from 'use-sound';
import boopSfx from '../assests/audio/success_sound.mp3';

const Contact = () => {
  const [plays] = useSound(boopSfx);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [msg, setMsg] = useState("");
  //error Handling
  const [errName, setErrName] = useState("");
  const [errMob, setErrMob] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const form = useRef();

  const formSubmitHandler = (e) =>{
    e.preventDefault();
    const emailPattern = /^[A-Za-z0-9._]{3,}@[a-zA-Z]{3,}[.]{1,}[a-zA-Z.]{2,6}$/g;

    if(name === "" || name.length < 5){
      swal("Oops!", "Wrong Name Input", "error");
      setErrName("Invalid Name**");
    }else if(isNaN(mob) || mob.length < 10 || mob.length > 10){
      swal("Oops!", "Mobile Number must be 10 digit", "error");
      setErrMob("Invalid Mobile Number**");
    }else if(!emailPattern.test(email)){
      swal("Oops!", "Invalid email address", "error");
      setErrEmail("Invalid Email**");
    }else if(msg.length < 25){
      swal("Oops!", "Message should be greater than twenty five words.", "error");
      setErrMsg("Message should be greater than twenty five characters **");
    }else{
      swal("Sent", "I will get back to you as soon as possible", "success"); 
      setMob("");
      setName("");
      setEmail("");
      setMsg("");
      // error
      setErrMob("");
      setErrName("");
      setErrEmail("");
      setErrMsg("");
      plays();
      emailjs.sendForm(
        "service_9qrl41l",
        "template_nbaucaa",
        form.current,
        "qjRsQvu1S5q4aYrqk"
      ).then((result)=>{
        console.log(result.text)
      },(err)=>{
        console.log(err.text)
      })
    }
  };

  return (
    <div className='contact'>
      <div className="container">
        <div className="row">

        <div className="col-md-12">
          <h2>Contact</h2>
          <p>Visit me on social media, browse my repositories, or drop some words on my email</p>
        </div>

      <div className="col-md-6 mt-2">
        {sobj.map((val, ind)=>{
          const {icon, hrefLink, name} = val;
            return(
              <div className="social-media">
                <a href={hrefLink} target="blank">
                  <i className={`fa-brands ${icon}`}></i>
                  <div>
                      <h4>{name}</h4>
                      <p>Follow me on {name}</p>
                  </div>
                </a>
              </div>
        )})}
        </div>


        <div className="col-md-6 mt-2">
          <form onSubmit={formSubmitHandler}>
            <div>
              <input name="name" onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name'/>
              <p>{errName}</p>
            </div>
            <div>
              <input name="mobno" onChange={(e) => setMob(e.target.value)} value={mob} type="text" placeholder='Mobile Number'/>
              <p>{errMob}</p>
            </div>
            <div>
              <input name="emails" onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Email Address'/>
              <p>{errEmail}</p>
            </div>
            <div>
              <textarea name="message" onChange={(e) => setMsg(e.target.value)} value={msg} placeholder='Message...' id="" cols="30" rows="5"></textarea>
              <p>{errMsg}</p>
            </div>
            <button className='btn btn-warning fw-bold' type='submit'>Send</button>
          </form>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Contact;



const sobj = [
  {
    icon: "fa-linkedin",
    hrefLink: "https://www.linkedin.com/in/nawazdanish/",
    name: "LinkedIn",
  },
  {
    icon: "fa-square-github",
    hrefLink: "https://github.com/nawazdanish1996",
    name: "GitHub"
  },
  {
    icon: "fa-square-twitter",
    hrefLink: "https://twitter.com/nawazdanish1996",
    name: "Twitter"
  },
  {
    icon: "fa-square-facebook",
    hrefLink: "https://www.facebook.com/developerHost/",
    name: "Facebook"
  },
];