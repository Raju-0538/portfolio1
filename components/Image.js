import React, { useEffect, useState } from 'react';
import './image.css';
import img2 from '../../src/transparent_background.png';

function Image() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation once the component is mounted
        setIsVisible(true);
    }, []);

    return (
        <div className={`pro ${isVisible ? 'show' : ''}`}>
            <img src={img2} alt="Animated" />
        </div>
    );
}

export default Image;
