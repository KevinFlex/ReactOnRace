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
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=154b30803a73ce5aaa4744bc121c10c1&tags=bikerace%2C+boulderbiketour&per_page=40&page=${page}&format=json&nojsoncallback=1`;
        setLoading(true);

        try {
            const res = await fetch(url);

            setLoading(false);
            return await res.json();
        } catch (e) {
            setLoading(false);
            return e;
        }
    }, []);

    const handleInitial = useCallback(
        async page => {
            const newImages = await fetchData(page);
            console.log(newImages);
            const { photos } = newImages;
            setImages(images => [...images, ...photos.photo]);
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
                <ul className="imageGrid row text-center picture">
                    {images.map((item, index) => (
                        <li key={index} className="hover-shadow shadow-4 mb-3 col-12 col-md-3 px-2">
                            <img src={'https://live.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_w.jpg'} alt="incoming event" className="img-fluid w-100" />
                        </li>
                    ))}
                </ul>
            )}

            {loading && <li>Loading ...</li>}

            <div ref={setElement} className="buttonContainer picture">
                <button className="buttonStyle" hidden>Load More</button>
            </div>
        </>
    );
}

export default InfiniteScroll