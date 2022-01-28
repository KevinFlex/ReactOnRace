import React, { useState, useEffect } from 'react';

function Picture() {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    var photoPerPage = 12
    const [photos, setPhotos] = useState([...Array(photoPerPage).keys()]);

    var photoNumber = photoPerPage;


    useEffect(() => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=154b30803a73ce5aaa4744bc121c10c1&tags=bikerace%2C+boulderbiketour&per_page=${photoPerPage}&page=1&format=json&nojsoncallback=1`)
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
    }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";
    if (data)

        function handleScroll() {

            var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight;
            if (isAtBottom) {

                photoNumber += photoPerPage;

                setPhoto([...Array(photoNumber).keys()]);

            }
        }

    window.addEventListener("scroll", handleScroll);


    return (
        <>
            <div className='picture row px-4'>
                {data.map((item, i) =>
                    <div key={i} className='col-4 text-center'>
                        <img
                            src={item} className='img-fluid shadow-4 mb-3 hover-shadow' alt='Incoming event'
                        />
                    </div>
                )}
            </div>

        </>
    )

}
export default Picture