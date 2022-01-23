import React, { useEffect } from 'react'
import {useState} from 'react'

export default function Forms() {
    const [firstName, steFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [slogan, setSlogan] = useState('');

    const [validated, setValidated] = useState(false);


    const handleSubmit = (evt) => {
        evt.preventDefault();
    
        const form = evt.currentTarget;
        if (form.checkValidity() === false) {
    
          evt.preventDefault();
          evt.stopPropagation();

          alert('Submitting error, check the character number');

        }
        else {
        const res = fetch.post('slogan submitted',{
        firstName, lastName, email, slogan
        })
    }

    setValidated(true);

}
    return (
            <form className='form' noValidate onSubmit={handleSubmit()}>
            <label>Enter First name here</label>
            <input
            name="firstName"

            />
            </form>

    );
}