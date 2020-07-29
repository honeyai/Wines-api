import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_EXAMPLE_API_KEY
const BASE_URL = `http://myapi-profstream.herokuapp.com/api/${apiKey}`

console.log(BASE_URL)

const GetWinesHooks = () => {

  const [data, setData] = useState({});
  
  async function getWines() {
    try {
      let response = await axios.get(BASE_URL + `/wines`)
      setData(response.data)
    } catch (error) {
      console.error("!!Señor!! PROBLEMA:", error.message)
    }
  }
  
  console.log("we gots the data,", data)
  console.log("we gots the array,", data[0])

  let store = data[0];

  console.log("this is store,", store)



  useEffect(() => {
    getWines();
  }, [])
  

  return (
    <div>
      
    </div>
  );
};

export default GetWinesHooks;