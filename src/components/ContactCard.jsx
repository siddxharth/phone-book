import React from 'react'

export default function ContactCard(props) {
    return (
        <div className='contact-card'>
            <div className='contact-name'>{props.name}</div>
            <div className='contact-info'>
                <div className='contact-phone'>{props.phone}</div>
                <div className='contact-email'>{props.email}</div>
            </div>
        </div>
    )
}