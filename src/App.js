import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
// import Contact from './Components/Contact';
import Footer from './Components/Footer';
import fire from './fire';

var ref = fire.database().ref("portfolio");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  componentDidMount() {
    ref.on('value', function (snapshot) {
      this.setState({ main: snapshot.val().main }, function () {
        console.log(this.state.main);
      });
      this.setState({ portfolio: snapshot.val().portfolio }, function () {
        console.log(this.state.portfolio);
      });
      this.setState({ resume: snapshot.val().resume }, function () {
        console.log(this.state.resume);
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.fire.off();
  }


  render() {
    console.log(this.state.main);
    return (
      <div className="App">
        <Header data={this.state.main} />
        <About data={this.state.main} />
        <Resume data={this.state.resume} />
        <Portfolio data={this.state.portfolio} />
        {/* <Contact data={this.state.resumeData.main} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;