import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "../styles/Error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="error">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p><b>{error.status}</b> {error.statusText}</p>
      </div>
    );
  } else {
    return (<div className="error">Oops</div>);
  }
}
