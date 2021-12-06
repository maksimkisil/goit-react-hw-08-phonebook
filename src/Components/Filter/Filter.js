import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as selectors from '../../redux/selector';
import * as phonebookActions from '../../redux/actions';
import s from './Filter.module.css';

export default function Filter() {

  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Find contact
        <input
          type="text"
          name="name"
          value={value}
          onChange={(e) =>
            dispatch(phonebookActions.filterContacts(e.target.value))
          }
          className={s.input}
          placeholder='type in name...'
        />
      </label>
    </div>
      )    
};
  
// const mapStateToProps = (state) => ({
//   value: state.phonebook.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (event) =>
//     dispatch(phonebookActions.filterContacts(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
