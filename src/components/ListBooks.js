import { useState } from "react";
import Book from "./Book";

const ListBooks = () => {
  const [books, setBooks] = useState([
    {
      id: "IOejDAAAQBAJ",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      imageUrl:
        "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
    },
    {
      id: "IOejDAAAQABJ",
      title: "Ender's Game",
      author: "Orson Scott Card",
      imageUrl:
        "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
    },
  ]);
  return books.map((book) => (
    <li key={book.id}>
      <Book title={book.title} author={book.author} imageUrl={book.imageUrl} />
    </li>
  ));
};

export default ListBooks;
