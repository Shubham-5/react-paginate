import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import ReactPaginate from "react-paginate";

function App() {
  const [data, setData] = useState([]);
  const [showDetails, setDetails] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  //paginate
  const endOffset = itemOffset + 3;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / 3);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 3) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='App'>
      {currentItems?.map((user) => (
        <UserCard
          key={user.id}
          {...user}
          setDetails={setDetails}
          showDetails={showDetails}
        />
      ))}
      <ReactPaginate
        className='paginate'
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default App;

// Pre-requisites: -
// Html, CSS, JavaScript, React, Git, REST APIs, Cypress.js Automation Testing (Optional, but
// preferred), Typescript (Is a plus)
// Assignment: -
// • Using create-react-app build a new project and setup a repository (Github/Your choice), Link
// to be shared with us at completion of your assignment
// • You are expected to implement this using States, fetch/Axios, async-await, etc (You’re free to
// use whatever NPM packages you like to get the task done)
// • Here’s the API Endpoint you’re supposed to fetch the data from:
// o In case, of any issues with the API Endpoint, please get in touch with us.
// o Execute the following curl command to know the format of the data
// • You’re free to use any design format/colour/layouts, etc to achieve the end result similar to
// images below.
// • Display basic information initially, upon clicking View details expand the informatio
