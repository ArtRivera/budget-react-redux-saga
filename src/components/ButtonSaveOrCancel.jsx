import React from "react";
import { Button } from "semantic-ui-react";

export const ButtonSaveOrCancel = ({addEntry}) => {
  return (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or />
      <Button 
      onClick={addEntry()}
      primary>Ok</Button>
    </Button.Group>
  );
};
