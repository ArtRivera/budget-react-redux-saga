import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { EntryForm } from './EntryForm';

export const ModalEdit = ({isOpen, setIsOpen,description,value,isExpense,handleChange,handleToggle}) => {
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
            <Button onClick={()=> setIsOpen(false)} >Close</Button>
            <Button onClick={() => setIsOpen(false)} positive>Ok</Button>
        </Modal.Actions>
      </Modal>
    )
}
