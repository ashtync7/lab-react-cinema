import React, { Link } from 'react';

const Home = () => {
    return (
        <div>
            <h1>Cinema Ironhack</h1>
            <Link to="/Movies">
                <button>Check the movies!</button>
            </Link>

        </div>
    );
};

export default Home;