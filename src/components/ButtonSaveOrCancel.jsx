import React from "react";
import { Button } from "semantic-ui-react";

export const ButtonSaveOrCancel = () => {
  return (
    <Button.Group>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>Ok</Button>
    </Button.Group>
  );
};
