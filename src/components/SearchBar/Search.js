import React, {useState} from 'react';
import PropTypes from 'prop-types';
import s from './Search.module.css';

export default function Search({onSubmit}) {
   const [searchQuery, setSearchQuery] = useState('');
   const handleSubmit = (e) => {
      setSearchQuery(e.target.value.toLowerCase())
   }
   const handleChange = (e) => {
      e.preventDefault();
      if (searchQuery.trim() === ' ') {
         alert('Write something');
         return;
      }
      onSubmit(searchQuery);
   }
   return (
      <header>
         <form onSubmit={handleSubmit}>
            <input className={s.input}>
               type='text'
               autocomplete='off'
               autoFocus
               placeholder="Search movie"
               value={searchQuery}
               onChange={handleChange}
            </input>
            <button className={s.btn} type='submit'>Search
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