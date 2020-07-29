import React, { Component } from 'react';
import axios from 'axios';

const apiKey = `0c3ac6`
const BASE_URL = `http://myapi-profstream.herokuapp.com/api/${apiKey}`

class Wines extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  async getWines() {
    try {
      let response = await axios.get(BASE_URL + `/wines`)
      this.setState({
        data: response.data
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  componentDidMount() {
    this.getWines();
  }

  render() {
    return (
      <div>
        {this.state.data.map(index => {
          return (
            <div className="theWines" >
              <h4>{index.name}</h4>
              <h4>{index.year}</h4>
              <img src={index.picture}/>
              <h4>Made with {index.grapes}</h4>
              <h4>Made in {index.region}, {index.country}</h4>
              <h4>{index.description}</h4>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Wines;