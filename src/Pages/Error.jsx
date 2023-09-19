import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary px-8">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="leading-7 mt-4 text-lg">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10">
            <Link className="btn btn-secondary">Go Back Home</Link>
          </div>
        </div>
      </main>
    );
  }

  return <h1 className="text-4xl">There was an error...</h1>;
};
export default Error;
