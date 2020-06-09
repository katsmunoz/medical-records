import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
//llamado de Api
const PatientRecords = () => {
    const [records, setRecords] = useState([]);
  
    useEffect(() => {
      axios.get(`https://jsonmock.hackerrank.com/api/medical_records?userId=1`).then(res => {
        const records = res.data.data;
        console.log(records)
        setRecords(records);
      });
    }, []);
  
    return (
    <ul>
      {records.map(record => (
      <li key={record.id}>
        {record.userDob}
        </li>
        ))}
        </ul>
    );
  };
  
  export default PatientRecords;


