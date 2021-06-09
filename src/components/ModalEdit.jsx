import React,{useEffect} from 'react'
import { Button, Modal } from 'semantic-ui-react';
import { EntryForm } from './EntryForm';
import {useDispatch} from 'react-redux';
import { closeModal } from '../actions/ui.actions';
import {useEntry} from '../hooks/useEntry';
import { updateEntryRedux } from '../actions/entries.actions';

export const ModalEdit = ({isOpen,id,entries}) => {

  const {description, value, isExpense, handleChange, handleToggle,setIsExpense, setForm} = useEntry();

  const [entry] = entries.filter(entry => entry.id === id);

  useEffect(() => {
    if (id) {
      setForm({
        description: entry.description,
        value: entry.value,
      });
      setIsExpense(entry.isExpense);
    }
    console.log('MODAL ABIERTO CONID',id);
  }, [isOpen])

  const dispatch = useDispatch();

  const handleUpdate = () =>{
    dispatch(updateEntryRedux({
      ...entry,
      description,
      value,
      isExpense
    }))
    dispatch(closeModal());
  }

    return (
      <Modal open={isOpen}>
          <Modal.Header>Edit Entry</Modal.Header>
          <Modal.Content>
           <EntryForm 
           value={value}
           description={description}
           isExpense={isExpense}
           handleChange={handleChange}
           handleToggle={handleToggle}
           />
          </Modal.Content>
        <Modal.Actions>
            <Button onClick={()=> dispatch(closeModal())} >Close</Button>
            <Button onClick={handleUpdate} positive>Ok</Button>
        </Modal.Actions>
      </Modal>
    )
}
