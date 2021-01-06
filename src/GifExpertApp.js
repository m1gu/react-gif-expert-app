import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Dragon Ball', 'Samurai X'];
    const [categories, setCategories] = useState(['One Punch']);

    /*
    const handleAdd = () => {
        setCategories( [...categories, 'Robotech'] );
    };
    */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => {
                        return <GifGrid key={ category } category={ category } />
                    })
                }
            </ol>
        </>
    );

}

export default GifExpertApp;