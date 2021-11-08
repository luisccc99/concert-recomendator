import { useEffect } from 'react';

const ExternalRoute = () => {
    useEffect(() => {
        window.location.href = 'https://accounts.spotify.com/authorize';
        return null;
    });
};


export default ExternalRoute;