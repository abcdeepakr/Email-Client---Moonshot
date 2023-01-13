import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {emailState, updateSelectedEmail} from '../EmailSlice';
import '../emailClient.css'
function EmailCard(props) {
const dispatch = useDispatch();
const emailData = useSelector(emailState);
let email = props.email
let emailCardClasses = ["email-card"]
if(email.id === emailData.selectedEmailId){
    emailCardClasses.push("selected")
}
  return (
    <React.Fragment>
    <div className={emailCardClasses.join(" ")}>
    <div className='profile-picture'>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
    </div>
        <div className='email-card-text' onClick={()=>dispatch(updateSelectedEmail(email.id))}>
            <p>From: <b>{email.from.name} {`<${email.from.email}>`}</b></p>
            <p>Subject: <b>{email.subject}</b></p>
            <p>{email.short_description}</p>
            <p>10/01/2022 12:24PM</p>
        </div>
    </div>
    
    </React.Fragment>
  )
}

export default EmailCard