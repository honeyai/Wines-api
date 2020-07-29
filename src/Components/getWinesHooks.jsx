import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_EXAMPLE_API_KEY
const BASE_URL = `http://myapi-profstream.herokuapp.com/api/${apiKey}`

console.log(BASE_URL)

const GetWinesHooks = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  async function getWines() {
    try {
      let response = await axios.get(BASE_URL + `/wines`)
      setData(response.data)
    } catch (error) {
      console.error("!!Señor!! PROBLEMA:", error.message)
    }
    setLoading(true);
  }

  console.log("we gots the data,", data)
  console.log("we gots the array,", data[0])

  let store = data[0];

  console.log("this is store,", store)

  console.log("this loading,", loading)



  useEffect(() => {
    getWines();
  }, [])


  return (
    <div>
      {loading ?
          data.map(index => {
            return (
              <div className="theWines" >
                <h4>{index.name}</h4>
                <h4>{index.year}</h4>
                <img src={index.picture} />
                <h4>Made with {index.grapes}</h4>
                <h4>Made in {index.region}, {index.country}</h4>
                <h4>{index.description}</h4>
              </div>
            )
          })
      : null}

    </div>
  );
};

export default GetWinesHooks;