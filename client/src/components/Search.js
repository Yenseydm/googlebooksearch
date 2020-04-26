import React from 'react';
 
import Footer from './Footer';
import Jumbotron from './Jumbotron';

const SearchPg = () => {
    return (
       <div>
           <Jumbotron/>
          <h1>Search</h1>
           <p>Search books here</p>
           <Footer />
       </div>
    );
}
 
export default SearchPg;