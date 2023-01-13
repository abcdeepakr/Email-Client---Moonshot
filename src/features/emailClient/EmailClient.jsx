import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchEmailReducer, emailState, updateSelectedEmail} from './EmailSlice';
import EmailCard from './components/emailCard'
// import styles from './Counter.module.css';

export default function Counter() {
  const emailData = useSelector(emailState);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchEmailReducer())
  },[])
  
   return (
    <React.Fragment>
        {emailData.emails ? emailData.emails.map((email) => {
            return (
                <EmailCard key={email.id}  email={email}/>
            )
        }) : null}
      
    </React.Fragment>
  );
}
