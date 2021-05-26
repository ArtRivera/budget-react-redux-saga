import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
export const EntryLine = ({ entry, deleteEntry, editEntry }) => {
  const { description, value, isExpense, id } = entry;

  

  return (
    <>
    <Segment color={isExpense ? "red" : "green"}>
      <Grid columns={3} textAlign="right">
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            ${value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit"  onClick={() => editEntry(id)}/>
            <Icon name="trash" onClick={deleteEntry(id)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
   
    </>
  );
};
