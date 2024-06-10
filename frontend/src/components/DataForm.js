import React, { useState } from 'react';
import axios from 'axios';

const DataForm = () => {
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/data', { data });
      alert('Data submitted successfully');
      setData(''); // Clear the form input after submission
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data:
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataForm;