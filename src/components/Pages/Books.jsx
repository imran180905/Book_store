import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import Book from "../book";

const Books = () => {
  const { books } = useLoaderData();
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className=" grid sm-max:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {books.map((books) => (
          <Book books={books} key={books.isbn13} />
        ))}
      </div>
    </div>
  );
};
export default Books;
