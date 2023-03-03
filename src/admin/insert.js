import React, { useState } from 'react';
import axios from 'axios';

function InsertData() {
  const [data, setData] = useState({
    name: '',
    age: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/insertData', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={data.name} onChange={handleChange} />
      <input type="number" name="age" value={data.age} onChange={handleChange} />
      <button type="submit">Insert Data</button>
    </form>
  );
}

export default InsertData;
