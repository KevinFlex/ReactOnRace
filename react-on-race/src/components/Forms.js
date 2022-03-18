import React, { useEffect } from 'react'
import useInput from './Hooks/InputForm'
import { useState } from 'react'

export default function Forms() {
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: mail, bind: bindMail, reset: resetMail } = useInput('');
    const { value: slogan, bind: bindSlogan, reset: resetSlogan } = useInput('');

    const [validated, setValidated] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {

            event.stopPropagation();

            alert('Submitting error, check the character number');
            form.classList.add('was-validated')

        }
        else {

            const data = { firstName, lastName, mail, slogan };

            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
            resetLastName();
            resetFirstName();
            resetMail();
            resetSlogan();
            form.classList.remove('was-validated')

        }
        setValidated(true);

    }
    return (
        <form className='form' noValidate onSubmit={handleSubmit}>
            <label for="firstName" className="form-label">First Name
            </label>
            <input
                id="firstName"
                className="form-control"
                name="firstName"
                required
                type="text"
                value={firstName}
                {...bindFirstName}
            />

            <label for="lastName" className="form-label">Last Name
            </label>
            <input
                id="lastName"
                className="form-control"
                name="lastName"
                required
                type="text"
                value={lastName}
                {...bindLastName}
            />

            <label for="mail" className="form-label">Email
            </label>
            <input
                id="mail"
                className="form-control"
                name="mail"
                required
                type="text"
                value={mail}
                {...bindMail}
            />

            <label for="slogan" className="form-label">Your slogan:
            </label>
            <input
                max-length="50"
                id="slogan"
                className="form-control"
                name="slogan"
                required
                type="text"
                value={slogan}
                {...bindSlogan}
            />
            <input className="btn-success px-3 rounded mt-3" type="submit" value="Send"  {...handleSubmit} />
        </form>

    );
}
