import React, { useEffect, useState } from "react";

function Counter() {
const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`01/28/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    return timeLeft;
}

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
const [year] = useState(new Date().getFullYear());

useEffect(() => {
    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
        return;
    }

    timerComponents.push(
        <span>
            {timeLeft[interval]} {interval}{" "}
        </span>
    );
});


return (
    <div className="container">
        <div className="row">
            <div className="col-12">
            <h2>Main {year} Cycle Race</h2>
            <div className="col-12">
            {timerComponents.length ? timerComponents : <span>Race started !</span>}

            </div>
            </div>
        </div>


    </div>
);
}

export default Counter;
