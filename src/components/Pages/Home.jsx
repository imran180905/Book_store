import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import reader from "../../assets/reader.json";
const Home = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-between lg:flex-row">
      <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
        <p className="uppercase rounded-full p-1 bg-yellow-400 w-20 h-auto">
          {" "}
          on sale!
        </p>
        <p className="font-bold text-3xl mt-4">
          A reader lives <br /> a thousand lives
          <span className="text-blue-700"> before he dies</span>
        </p>
        <article className="text-gray-700 font-md text-xl mt-4">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </article>

        {/* Visit store button  */}

        <Link to="/books" className="inline-flex items-center gap-4 m mt-4">
          <div className="flex text-white bg-blue-400 hover:bg-blue-800 h-14 w-44 justify-center items-center  rounded-md transition duration-200">
            <div>
              <button className="text-xl font-semibold">Visit Store</button>
            </div>
            <ShoppingCartIcon className="w-8 h-8 ml-3" />
          </div>

          {/* Go to about page  */}

          <Link
            to="/about"
            className=" text-xl font-semibold hover:text-blue-500"
          >
            Learn More
          </Link>
        </Link>
      </div>

      {/* Lottie Animation */}

      <div className="relative lg:w-1/2 ">
        <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};
export default Home;
