import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form/Form';
import ContactsList from '../ContactList/ContactsList';
import Filter from '../Filter/Filter';
import s from './ViewsStyles.module.css';    
import * as contactsReducers from '../../redux/reducers';

export default function Usersview() {
  const [contactName, setContactName] = useState('');

  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsReducers.fetchContacts()), [dispatch]);
  
  const onFilterChange = (e) => {
    setContactName(e.currentTarget.value);
    };
    
    return (
        <div>
            <h1 className={s.title}>Add your contacts here</h1>
            <Form />
            <h2 className={s.title}>Phonebook</h2>
            <Filter onChange={onFilterChange} value={contactName} />
            <ContactsList />
        </div>
    );    
};