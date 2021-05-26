import React from 'react';
import { Checkbox, Form, Segment } from "semantic-ui-react";

export const EntryForm = ({description,handleChange,value,handleToggle,isExpense}) => {
    return (
        <>
        <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          name="description"
          value={description}
          placeholder="New thing"
          onChange={handleChange}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={4}
          name="value"
          label="Value"
          value={value}
          onChange={handleChange}
          placeholder="100.00"
        />
      </Form.Group>
       <Segment compact>
       <Checkbox toggle label="Is Expense?" 
       onChange={handleToggle}
       checked={isExpense} />
     </Segment>
     </>
    )
}
