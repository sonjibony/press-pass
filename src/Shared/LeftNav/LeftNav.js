import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    //state declare
    const [categories, setCategories] = useState([]);
     console.log(categories)
    //using useEffect hook to load api
    useEffect(() => {
        fetch('http://localhost:5000/news-category')
        .then (res => res.json())
        .then (data => setCategories(data));
    },[])

    return (

        <div>
            <h5>All Category: {categories.length}</h5>
            <div>
                {
                  categories.map(category => <p key={category.id} >
                  <Link to={`/category/${category.id}`} >{category.name}</Link>
                  </p>)
                }
                
            </div>
        </div>
    );
};

export default LeftNav;