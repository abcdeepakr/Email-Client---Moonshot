import React, { useEffect } from 'react'
import '../emailClient.css'
import MasterBodyHeader from './masterBodyHeader';
import MasterBody from './masterBody';

import { useDispatch, useSelector } from 'react-redux';
import { fetchEmailBodyReducer, emailState } from '../EmailSlice';


function MasterEmail() {
  
  const emailData = useSelector(emailState);
  const dispatch = useDispatch();
  let selectedEmail = null
  if(emailData.selectedEmailId != null){
    selectedEmail = emailData.emails.filter(email => email.id === emailData.selectedEmailId)
    selectedEmail = selectedEmail[0]
  }
  useEffect(()=>{
    if(selectedEmail != null){
        dispatch(fetchEmailBodyReducer(selectedEmail.id))
    }
  },[emailData.selectedEmailId])
  
  return (
    <section data-section-id="master-email-section" className='master-email-section'>
        {selectedEmail === null ? null : 
            <React.Fragment>
                <MasterBodyHeader emailMeta ={selectedEmail} />
                <MasterBody emailBody = {emailData.selectedEmailBody} />
            </React.Fragment>
        }
    </section>
  )
}

export default MasterEmail