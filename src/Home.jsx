import React, { useContext } from 'react';
import { Context } from './App';

function Home(props) {

    const getData = useContext(Context)
    console.log("Context data " ,  getData)
    return (
        <div>
            Welcome to Home page
            This is for testing 
            Know i Create a new branch and puch the changes on that branch
        </div>
    );
}

export default Home;
