import { Link } from "react-router-dom";

const Book = ({ books }) => {
  return (
    <Link to={`../book/${books.isbn13}`}>
      <div className="overflow-hidden relative transition duration-300 transform hover:-translate-y-3 rounded-lg hover:rounded-2xl shadow-md mt-6 ">
        <img
          className="object-cover w-full h-56 md:h-64 lg:h-80"
          src={books.image}
        ></img>
        <div className=" text-white bg-black bg-opacity-75 absolute inset-0 px-6 py-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col">
          <p>{books.title}</p>
          <br></br>
          <p>{books.subtitle.substring(0, 40)}...</p>
          <br />
          <p className="mt-auto"> price: {books.price}</p>
        </div>
      </div>
    </Link>
  );
};
export default Book;
