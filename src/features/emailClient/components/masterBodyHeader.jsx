import React from 'react'
import '../emailClient.css'
import { parseUnixTimeStamp } from '../EmailAPI'

function MasterBodyHeader({ emailMeta }) {
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
                <button className='master-email-section__favourite--button'>Mark as favourite</button>
            </div>
        </section>
    )
}

export default MasterBodyHeader