import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emailState, updateSelectedEmail } from '../EmailSlice';
import { parseUnixTimeStamp, truncateText } from '../EmailAPI';
import '../emailClient.css'
function EmailCard(props) {
  const dispatch = useDispatch();
  const emailData = useSelector(emailState);
  let email = props.email
  let emailCardClasses = ["email-card"]
  if (email.id === emailData.selectedEmailId) {
    emailCardClasses.push("selected")
  }

  return (
    <React.Fragment>
      
        <div className={emailCardClasses.join(" ")}>
          <div className='profile-avatar'>
            <span>{email.from.name[0].toUpperCase()}</span>
          </div>
          <div className='email-card-text' onClick={() => dispatch(updateSelectedEmail(email.id))}>
            <p>From: <span className='text-bold'>{email.from.name} {`<${email.from.email}>`}</span></p>
            <p>Subject: <span className='text-bold'>{email.subject}</span></p>
            <p className='email-description'>{truncateText(email.short_description)}</p>
            <p>{parseUnixTimeStamp(email.date)} <span className='favourite-label'>{emailData.favouriteEmailsIds.indexOf(email.id) !==-1 ? "Favourite": ""}</span></p>
          </div>
        </div>
    </React.Fragment>
  )
}

export default EmailCard