import React, { useState} from "react";
import { toast } from 'react-toastify';
import * as reducers from '../../redux/reducers';
import { useDispatch } from "react-redux";
import s from './Form.module.css'

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
   const dispatch = useDispatch();

  const handleInput = e => {
    const {name, value} = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(reducers.addContact({ name, number }));
    reset();
    toast.success('Contact added!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }); 
  }

  const reset = () => {
    setName('');
    setNumber('');
    }

  return (
    <div className={s.form}>
            <form onSubmit={handleSubmit}>
              <label className={s.label}>Name
                <input
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  onChange={handleInput}
                  required
                  placeholder='add name...'
                  className={s.input}
              />
              </label>
            <label className={s.label}>Phone number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                onChange={handleInput}
                required
                placeholder='add number...'
                className={s.input}
              />
            </label>
              <button type="submit" className={s.button} title='Добавить новый контакт'>Add contact</button>
      </form>
      
    </div>
    
  )
};

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (value) => dispatch(phonebookActions.addContact(value)),
// });

// export default connect(null, mapDispatchToProps)(Form);