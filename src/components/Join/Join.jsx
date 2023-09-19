import { useRef } from 'react'
import './join.css'
import emailjs from '@emailjs/browser';
//Para usar el emailjs crear cuenta en: https://dashboard.emailjs.com/sign-up
export const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    {/*Aqui cambiaras los parametros por los de tu cuenta */}
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
            <span className='stroke-text'>¿Necesitas </span>
            <span> Ayuda?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className='email-container' onSubmit={sendEmail}>
                <input type="email" name="user_email" id="" placeholder='Introduce tu Email'/>
                <button className='btn btn-j'>Contactar</button>
            </form>
        </div>
    </div>
  )
}
