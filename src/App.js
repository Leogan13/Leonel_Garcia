import React from 'react';
import Header from './components/headerT/header.component'
import LandingPage from './pages/landingPage/landingPage.component'
import './App.css';
import AboutPage from './pages/AboutPage/aboutPage.component'
import Directory from './components/directory/directory.component'
import Footer from './components/footerT/footer.component'








class App extends React.Component {

  render(){
  return (
      <div>
          <Header/>
          <LandingPage/>
          <AboutPage/>
          <Footer/>
          
      </div>
  );
  }
}

export default App;
