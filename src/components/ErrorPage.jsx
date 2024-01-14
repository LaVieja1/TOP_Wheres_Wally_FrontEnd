import { useRouteError } from "react-router-dom";
import './styles/ErrorPage.css';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Ops!</h1>
            <p>Hubo un error</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}