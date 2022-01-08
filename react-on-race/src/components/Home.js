import React from 'react';
import '../App.css';
import Counter from './Counter';


function HomePage() {
    return (
        <div>
            <section className="hero d-flex justify-content-center align-items-center text-light" id="home">
                <h1 className="lead"> Welcome on the Race of the year</h1>
            </section>  
            <section>
                <Counter />
            </section>      
        </div>
    );
}

export default HomePage;