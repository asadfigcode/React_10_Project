import Buttons from '../Buttons/Buttons'
import styles from './ContactForm.module.css'
import { MdMessage } from 'react-icons/md'
import { RiPhoneFill } from 'react-icons/ri'
import { HiMail } from 'react-icons/hi'
import { useState } from 'react'


const ContactForm = () => {

const [name, setName] = useState('asad');
const [email, setEmail] = useState('asad@gmail.com');
const [text, setText] = useState('Something went wrong i think so');


const onSubmitHandler = (e) => {
  e.preventDefault();

  setName(e.target[0].value);
  setEmail(e.target[1].value);
  setText(e.target[2].value);
}

  return (

    <div className={styles.container}>
       <div className={styles.contact_form}>
          
         <div className={styles.top_btn}>
         <Buttons 
          text="VIA SUPPORT CHAT" 
          icon={<MdMessage fontSize={23} />} />

          <Buttons 
          text="VIA CALL" 
          icon={<RiPhoneFill fontSize={23} />} />
         </div>

         <Buttons
          isOutline={true}
          text="VIA EMAIL FORM" 
          icon={<HiMail fontSize={23} />} />

          <form onSubmit={onSubmitHandler}>
            <div className={styles.form_controle}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name'/>
            </div>
            <div className={styles.form_controle}>
              <label htmlFor="email">Email</label>
              <input type="email" name='email'/>
            </div>
            <div className={styles.form_controle}>
              <label htmlFor="text">Textarea</label>
              <textarea name='text' rows='6' />
            </div>
            <div 
            style={{display:'flex', 
            justifyContent:'flex-end'}}>
              <Buttons text="SUBMIT" />
            </div>
            {/* <div>{name + ' ' + email + ' ' + text}</div>onSubmitHandler */}
         
          </form>

       </div>
       <div className={styles.contact_img}>
         <img src="/images/Service 24_7-pana 1.svg" alt="24/7_image" />
       </div>

    </div>
  )
}

export default ContactForm