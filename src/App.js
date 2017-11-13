import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from './utils/api';

function Quote(props){
  return(
    <div>
      <p>Author: {props.author}</p>
      <p>Quote: {props.quote}</p>
    </div>
  )
}

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      author: '',
      quote: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    api.fetchQuote()
      .then((response)=>{
        this.setState({
          author: response.author,
          quote: response.quote
        })
      });
  }
  render() {
    let author = this.state.author;
    let quote = this.state.quote;
    return (
      <div className='container'>
        <h1>Random Quote</h1>
        <div>
          <button onClick={this.handleClick}>Get Quote</button>
        </div>
        {
          author && 
          <Quote
            author= {author}
            quote= {quote}
          />
        }
      </div>
    );
  }
}

export default App;