import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export const ScrollToTop =() =>{
    const { pathname, search } = useLocation();

    useEffect(() => {
        setTimeout(() => window.scrollTo( 0, 0), 100);
        window.history.replaceState(null, "", pathname);
    },  [pathname, search]);

    return null;
}