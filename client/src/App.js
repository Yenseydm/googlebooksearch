import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import SearchPage from './Pages/Search';
import SavePage from './Pages/Saved';
import Navigation from './components/Nav';
import NoMatch from './Pages/noMatch';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />
          <Jumbotron />
          <div>
            <Wrapper>
              <Route path="/" component={SearchPage} exact />
              <Route path="/save" component={SavePage} />
              <Route path="/noMatch" component={NoMatch}/>
            </Wrapper>  
          </div>  
        </BrowserRouter>
        <Footer />
    </div>
      );
    }
  }
   
  export default App;
