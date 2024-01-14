import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ prevPath, setPrevPath }) {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.includes('leaderboard') && prevPath && prevPath.includes('leaderboard')) {
            setPrevPath(pathname);
            return;
        }
        setPrevPath(pathname);
        window.scrollTo(0, 0);
    }, [pathname, prevPath, setPrevPath]);

    return null;
}