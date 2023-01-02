import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError();
   console.log(error);

   return (
      <div id="error-page">
         <h1>OOPS!</h1>
         <p>Sorry, an error has occured</p>
         <p>
            <i>{error.statusText || error.message}</i>
         </p>
      </div>
   );
};
export default ErrorPage;
