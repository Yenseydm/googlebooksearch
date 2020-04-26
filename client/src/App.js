import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchPage from './components/Search';
import SavePage from './components/Save';
import Navigation from './components/Nav';
// import Footer from './components/Footer';
// import Jumbotron from './components/Jumbotron';

import './App.css';

class App extends Component {
  render() {
    return (      
      <div>
        <BrowserRouter>
         <div>
           <Navigation />
             <Switch>
              <Route path="/" component={SearchPage} exact/>
              <Route path="/save" component={SavePage}/>
            </Switch>
         </div> 
       </BrowserRouter>

          {/* <Jumbotron />

         <Footer/> */}
      </div>
      );
    }
  }
   
  export default App;
