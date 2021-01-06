import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handlerInputChange = (e) => {
        setInputValue( e.target.value );
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2 ) {
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
        
    };

    return (
        <form onSubmit={ handlerSubmit }>
            <input type="text" value={ inputValue } onChange={ handlerInputChange } />
        </form>
    );

}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory;