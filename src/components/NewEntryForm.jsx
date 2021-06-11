import React from "react";
import { Form } from "semantic-ui-react";
import { ButtonSaveOrCancel } from "./ButtonSaveOrCancel";
import { EntryForm } from "./EntryForm";
import {useDispatch} from 'react-redux';
import { addEntryRedux } from "../actions/entries.actions";
import {v4 as uuid4} from 'uuid';
import { useEntry } from "../hooks/useEntry";


export const NewEntryForm = () => {
  const {description,value,isExpense, resetEntry, handleChange, handleToggle} = useEntry();
  const dispatch = useDispatch();

  const addEntry = () =>{
    if(value){
      dispatch(addEntryRedux({
        id: uuid4(),
        description,
        value: Number(value),
        isExpense
      }));
  
      resetEntry();
    } else {
      alert('Falta el valor de el income/expense')
    }
  }

  return (
    <Form unstackable>
      <EntryForm
        value={value}
        description={description}
        isExpense={isExpense}
        handleChange={handleChange}
        handleToggle={handleToggle}
      />

      <ButtonSaveOrCancel addEntry={addEntry} />
    </Form>
  );
};
