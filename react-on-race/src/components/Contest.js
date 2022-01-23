import React from 'react';
import Slogan from './Slogan';
import Forms from './Forms';


function Contest() {
    return (
        <div className='home'>
            <section className="form">
                <Forms />
            </section>  
            <section className='solgan'>
                <Slogan />
            </section>      
        </div>
    );
}

export default Contest;