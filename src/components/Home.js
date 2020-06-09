import React from 'react';
import './Home.css';
import SelectBox from './SelectBox';
import TableRecords from './Table';

const Home = () => {
    return(
        <div className='content'>
        <header>
        <nav>
                <img src="https://img.icons8.com/cotton/64/000000/health-book.png" alt="logo-website" 
                width="30"
                height="30"
                className="d-inline-block align-top"/>
                {' '}
                <h1>Patient Medical Records</h1>
        </nav> 
        <SelectBox /> 
        </header>
        <main className="profile-view">
        <div className="patient-view">
        <div className="patient-info">
            <h2>Bob Martin</h2>
            <h4>DOB: 14 - 09 - 1989 </h4>
            <h4>Height: 174</h4>
        </div>
        <TableRecords />
        </div>
        </main>
        
        </div>

        
    )
}

export default Home;