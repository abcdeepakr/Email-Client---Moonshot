import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchEmailReducer, emailState, updateSelectedEmail} from './EmailSlice';
// import styles from './Counter.module.css';

export default function Counter() {
  const emailData = useSelector(emailState);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchEmailReducer())
  },[])
   return (
    <div>
        {emailData.emails ? emailData.emails.map((email) => {
            return (
            <div style={{"border":"2px solid red"}} key={email.id} onClick={()=>dispatch(updateSelectedEmail(email.id))}>
                {email.short_description}
            </div>
            )
        }) : null}
      
    </div>
  );
}
