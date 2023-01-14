import React from 'react'
import '../emailClient.css'
import { parseUnixTimeStamp } from '../EmailAPI'
import { useDispatch, useSelector } from 'react-redux';
import { updateFavouriteEmails, emailState } from '../EmailSlice';


function MasterBodyHeader({ emailMeta }) {
    const emailData = useSelector(emailState);
    const dispatch = useDispatch();

    let favourites = localStorage.getItem("favourite_emails")
    if(favourites){
        favourites = JSON.parse(favourites)
    } else{
        favourites = []
    }
    function updateFavouriteArray(emailId){
        let favouriteArr = localStorage.getItem("favourite_emails")
        if(favouriteArr){
            favouriteArr = JSON.parse(favouriteArr)
            if(favouriteArr.indexOf(emailId) == -1){
                favouriteArr.push(emailId)
            } else{
                favouriteArr = favouriteArr.filter(id => id !== emailId) // filtering out the email id
            }
            dispatch(updateFavouriteEmails(favouriteArr))
            localStorage.setItem("favourite_emails", JSON.stringify(favouriteArr))
        } else{
            dispatch(updateFavouriteEmails([emailId]))
            localStorage.setItem("favourite_emails", JSON.stringify([emailId]))
        }

    }
    return (
        <section className='master-email__header'>
            <div className='profile-avatar master'>
                <span>
                    {emailMeta.from.name[0].toUpperCase()}
                </span>
            </div>

            <div className='master-email-section__subject'>
                {emailMeta.subject}
                <div className='master-email-section__date'>
                {parseUnixTimeStamp(emailMeta.date)}
                </div>
                
            </div>
            <div className='master-email-section__favourite'>
                <button type='button' 
                    className="master-email-section__favourite--button"
                    onClick={()=>{updateFavouriteArray(emailMeta.id)}}>
                        {emailData.favouriteEmailsIds.indexOf(emailMeta.id) == -1 ? "Mark as favourite" : "Remove from favourites"}
                </button>
            </div>
        </section>
    )
}

export default MasterBodyHeader