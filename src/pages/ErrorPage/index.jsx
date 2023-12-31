import { useRouteError } from "react-router-dom";
import "./style.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error1">
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
