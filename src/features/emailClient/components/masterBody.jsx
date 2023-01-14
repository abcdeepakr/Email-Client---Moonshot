import React from 'react'
import '../emailClient.css'

function createMarkup(emailBody) {
    return { __html: emailBody };
}

function MasterBody({ emailBody }) {
    return (
        <section className='master-section-body'>
            <div dangerouslySetInnerHTML={createMarkup(emailBody.body)} />
        </section>
    )
}

export default MasterBody