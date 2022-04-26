import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from './Search.module.css';

export default function Search({onSubmit}) {
   const [searchQuery, setSearchQuery] = useState('');
   const handleSubmit = (e) => {
      e.preventDefault();
      if (searchQuery.trim() === '') {
         alert('Write something');
         return;
      }
      onSubmit(searchQuery);
   };
   const handleChange = (e) => {
      setSearchQuery(e.target.value.toLowerCase())
   };
   return (
      <header>
         <form className={s.form} onSubmit={handleSubmit}>
            <input
               className={s.input}
               type='text'
               autoComplete='off'
               autoFocus
               placeholder='Search movie'
               value={searchQuery}
               onChange={handleChange}
               />
            <button className={s.button} type='submit'>
               Search
            </button>
         </form>
         </header>
   )
};

Search.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   handleSubmit: PropTypes.func,
   value: PropTypes.string,
   handleChange: PropTypes.func,
};