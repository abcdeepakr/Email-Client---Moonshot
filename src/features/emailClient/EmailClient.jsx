import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmailReducer, emailState } from './EmailSlice';
import MasterEmail from './components/masterEmail';
import EmailCard from './components/emailCard'
import FilterTab from './components/filterTab';
// import styles from './Counter.module.css';

export default function EmailClient() {
    const emailData = useSelector(emailState);
    const dispatch = useDispatch();

    const [readEmailsArray, setReadEmailsArray] = useState([])
    useEffect(() => {
        // Fetch all emails when a page is loaded for the first time
        dispatch(fetchEmailReducer())
        // Fetch the array of read emails from localstorage
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

      useEffect(()=>{
        console.log("Runs when selected email is changed")
        let readEmails = localStorage.getItem("read_emails");
        if(readEmails == null){
            readEmails = [emailData.selectedEmailId]
            localStorage.setItem("read_emails", JSON.stringify(readEmails));
        } else{
            readEmails = JSON.parse(readEmails)
            if(readEmails.indexOf(emailData.selectedEmailId) === -1){
                readEmails.push(emailData.selectedEmailId)
            }
            localStorage.setItem("read_emails", JSON.stringify(readEmails));
        }
        setReadEmailsArray(readEmails)
         // eslint-disable-next-line react-hooks/exhaustive-deps
      },[emailData.selectedEmailId])
    function resetReadEmails() {
        localStorage.removeItem("read_emails")
    }
    return (
        <React.Fragment>
            <button onClick={() => resetReadEmails()}>Reset Emails</button>
            <FilterTab />
            <section data-section-id="email-layout-container" className='emails-layout'>
                <section className='email-card-container'>
                    {emailData.emails ? emailData.emails.map((email) => {
                        return (
                            <EmailCard key={email.id} email={email} />
                        )
                    }) : null}
                </section>
                
                {emailData.selectedEmailId === null ? null : <MasterEmail />}
            </section>


        </React.Fragment>
    );
}
