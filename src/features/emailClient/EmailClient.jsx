import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilteredIds, fetchEmailReducer, emailState } from './EmailSlice';
import MasterEmail from './components/masterEmail';
import EmailCard from './components/emailCard'
import FilterTab from './components/filterTab';
// import styles from './Counter.module.css';

export default function EmailClient() {
    const emailData = useSelector(emailState);
    const dispatch = useDispatch();
    useEffect(() => {
        // Fetch all emails when a page is loaded for the first time
        dispatch(fetchEmailReducer())
        // Fetch the array of read emails from localstorage
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(()=>{
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
    // setReadEmailsArray(readEmails)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[emailData.selectedEmailId])
    
    useEffect(() =>{
        let readEmails = localStorage.getItem("read_emails");
        if(readEmails){
            readEmails = JSON.parse(readEmails)
            if(emailData.selectedFilter === "unread"){
                let filteredEmails = emailData.emails.map(email => {
                    if(readEmails.indexOf(email.id) === -1){
                        return email.id
                    } else{
                        return null
                    }
                })
                dispatch(updateFilteredIds(filteredEmails))
                // setFilteredArray(filteredEmails)
            }
            if(emailData.selectedFilter === "read"){
                let filteredEmails = emailData.emails.map(email => {
                    if(readEmails.indexOf(email.id) !== -1){
                        return email.id
                    } else{
                        return null
                    }
                })
                dispatch(updateFilteredIds(filteredEmails))
            }
            if(emailData.selectedFilter === "favourites"){
                let favouriteEmails = localStorage.getItem("favourite_emails")
                if(favouriteEmails){
                    favouriteEmails = JSON.parse(favouriteEmails)
                    let filteredEmails = emailData.emails.map(email => {
                        if(favouriteEmails.indexOf(email.id) !== -1){
                            return email.id
                        } else{
                            return null
                        }
                    })
                    dispatch(updateFilteredIds(filteredEmails))
                }
                
            }
            if(emailData.selectedFilter === null){
                let filteredEmails = emailData.emails.map(email => email.id)
                dispatch(updateFilteredIds(filteredEmails))
            }
        }
    }, [emailData.selectedFilter])
    function resetLocalStorage() {
        localStorage.removeItem("read_emails")
    }
    return (
        <React.Fragment>
            <FilterTab />
            <section data-section-id="email-layout-container" className='emails-layout'>
                <section className={`email-card-container ${emailData.showCards ? "":"hideSlave"}`}>
                    {emailData.emails ? emailData.emails.map((email) => {
                        if(emailData.filteredEmailIds.indexOf(email.id) !== -1){
                            return (
                                <EmailCard key={email.id} email={email} />
                            )
                        }
                    }) : null}
                </section>
                {emailData.selectedEmailId === null ? null : <MasterEmail />}
            </section>
            <button onClick={() => resetLocalStorage()}>Reset local storage</button>
        </React.Fragment>
    );
}
