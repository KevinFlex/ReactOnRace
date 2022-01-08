import React, { useState, useEffect } from 'react';
import '../App.css';

function Picture() {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=154b30803a73ce5aaa4744bc121c10c1&tags=bikerace%2C+boulderbiketour&per_page=40&page=1&format=json&nojsoncallback=1")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })

            .then(data => {
                let picArray = data.photos.photo.map((item, i) => {
                    var url= 'https://live.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'_w.jpg';
                    console.log(item);

                    return <li key={i}><img src={url} alt="Actual biker event"></img></li>
                })
                console.log(JSON.stringify(data));
                setData (picArray);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";
    if (data)
    return (
        <>
            <img
                src={data} className='img-fluid shadow-4 mb-3 my-5 hover-shadow' alt='Incoming event'
            />
        </>
    )

}
export default Picture