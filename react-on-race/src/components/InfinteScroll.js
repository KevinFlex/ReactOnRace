import React, { useState, useEffect, useCallback, useRef } from 'react';


function InfiniteScroll() {
    const [element, setElement] = useState(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

    const page = useRef(1);
    const prevY = useRef(0);
    const observer = useRef(
        new IntersectionObserver(
            entries => {
                const firstEntry = entries[0];
                const y = firstEntry.boundingClientRect.y;

                if (prevY.current > y) {
                    setTimeout(() => loadMore(), 1000); // 1 sec delay
                }

                prevY.current = y;
            },
            { threshold: 1 }
        )
    );

    const fetchData = useCallback(async pageNumber => {
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=154b30803a73ce5aaa4744bc121c10c1&tags=bikerace%2C+boulderbiketour&per_page=6&page=${pageNumber}&format=json&nojsoncallback=1`;
        fetch(url)

            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;

            })

            .then(data => {
                let pictureGet = data.photos.photo.map((image, i) => {
                    return 'https://live.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '_w.jpg';
                    console.log(image);

                })
                console.log(JSON.stringify(data));

                setData(pictureGet);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleInitial = useCallback(
        async pageNumber => {
            const newImages = await fetchData(pageNumber);
            const { status, data } = newImages;
            if (status === 200) setImages(images => [...images, ...data]);
        },
        [fetchData]
    );
    const loadMore = () => {
        page.current++;
        handleInitial(page.current);
    };

    useEffect(() => {
        handleInitial(page.current);
    }, [handleInitial]);

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);

    return (
        <>
            {images && (
                <ul className="imageGrid">
                    {images.map((image, index) => (
                        <li key={index} className="imageContainer">
                            <img src={image} alt="incoming event" className="img-fluid shadow-4 mb-3 hover-shadow" />
                        </li>
                    ))}
                </ul>
            )}

            {loading && <li>Loading ...</li>}

            <div ref={setElement} className="buttonContainer">
                <button className="buttonStyle">Load More</button>
            </div>
        </>
    );
}

export default InfiniteScroll