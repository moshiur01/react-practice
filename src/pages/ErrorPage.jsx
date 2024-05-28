import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/img/404-page.jpg";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="container flex flex-col justify-center items-center h-screen text-center py-32 mx-auto">
      <div>
        <h1 className=" text-7xl font-extrabold mb-8">Error {status || 404}</h1>
        <p className="lg:text-3xl">{error?.message}</p>
      </div>

      <div className="w-80">
        <img src={errorImg} alt="" />
      </div>
      <button className="btn bg-red-500 text-white mt-8">
        <Link to="/">HomePage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
