import React, { useContext } from 'react';
import { Context } from './App';

function Home(props) {

    const getData = useContext(Context)
    console.log("Context data " ,  getData)
    return (
        <div>
            Welcome to Home page
This is for testing 
        </div>
    );
}

export default Home;
