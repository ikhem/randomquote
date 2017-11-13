import axios from 'axios';

export default {
  fetchQuote: ()=>{
    let url = `https://talaikis.com/api/quotes/random/`;

    return axios(url)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}