import React, { useState, useEffect } from 'react';

function Picture(props) {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=154b30803a73ce5aaa4744bc121c10c1&tags=bikerace%2C+boulderbiketour&per_page=40&page=${props.displayNumber}&format=json&nojsoncallback=1`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;

            })

            .then(data => {
                let picArray = data.photos.photo.map((item, i) => {
                    return 'https://live.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_w.jpg';
                    console.log(item);

                })
                console.log(JSON.stringify(data));

                setData(picArray);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    })

    if (loading) return "Loading...";
    if (error) return "Error!";
    if (data)

        return (
            <>
                {data.map((item, i) =>
                    <div className='col-12 col-lg-4 text-center'>
                        <img
                            key={i} src={item} className='img-fluid shadow-4 mb-3 hover-shadow' alt='Incoming event'
                        />
                    </div>
                )}
            </>
        )

}

export default Picture