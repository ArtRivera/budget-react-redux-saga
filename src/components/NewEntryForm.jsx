import React from "react";
import { Form } from "semantic-ui-react";
import { ButtonSaveOrCancel } from "./ButtonSaveOrCancel";
import { EntryForm } from "./EntryForm";

export const NewEntryForm = ({
  addEntry,
  description,
  value,
  isExpense,
  handleChange,
  handleToggle,
}) => {
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
