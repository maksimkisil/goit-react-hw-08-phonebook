import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as selectors from '../../redux/selector';
import * as reducers from '../../redux/reducers';
import s from './ContactList.module.css';

export default function ContactsList() {
  const contacts = useSelector(selectors.getContacts);
  const dispatch = useDispatch();

  const onDelete = (id) =>
    dispatch(reducers.deleteContact(id));

  return (
    <div>
      <ul className={s.list}>
                {contacts.map(({ id, name, number }) => (
                  <li key={id} className={s.list_item}>
                    <span className={s.name}>{name}</span>
                    <span className={s.number}>{number}</span>
                    <button type="button" id={id} onClick={() => onDelete(id)} className={s.button}>Delete</button>
                  </li>
                  
                )
                )}
      </ul>
    </div>)
}

// const mapStateToProps = state => {
//   const { items, filter } = state.phonebook;
//   const avaliableContacts = getAvaliableContacts(items, filter);
//   return {
//     contacts: avaliableContacts,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onDelete: (value) => dispatch(phonebookActions.deleteContact(value)),
// });

// const getAvaliableContacts = (items, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);