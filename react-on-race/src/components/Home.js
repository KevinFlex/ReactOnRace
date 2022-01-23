import React from 'react';
import Counter from './Counter';


function HomePage() {
    return (
        <div className='home'>
            <section className="hero d-flex justify-content-center align-items-center text-light" id="home">
                <h1> Welcome on the Race of the year</h1>
            </section>  
            <section className='counter'>
                <Counter />
            </section>      
        </div>
    );
}

export default HomePage;