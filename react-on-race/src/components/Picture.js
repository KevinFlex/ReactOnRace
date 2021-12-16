import React, { useState, useEffect } from 'react';
import '../App.css';




function Picture() {


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=154b30803a73ce5aaa4744bc121c10c1&tags=bikerace%2C+boulderbiketour&per_page=40&page=1&format=json&nojsoncallback=1")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
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
    return (
        <>
            <img src={data.results[0].picture.medium} alt="Actual Biker Event" />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );

}


// const PictureList = () => {
//     const[id, setId] = useState(true)
//     const[owner, setOwner] = useState(true)
//     const[secret, setSecret] = useState(true)
//     const[server, setServer] = useState(true)
//     const[farm, setFarm] = useState(true)
//     const[title, setTitle] = useState(true)

//     const { request, response, data, loading, error} = useFetch()
// }
export default Picture;