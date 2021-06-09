import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import {useDispatch} from 'react-redux';
import { removeEntryRedux } from "../actions/entries.actions";
import { openModal } from "../actions/ui.actions";


export const EntryLine = ({ entry }) => {

  const dispatch = useDispatch();

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
            <Icon name="edit"  onClick={() => dispatch(openModal(id))}/>
            <Icon name="trash" onClick={()=> dispatch(removeEntryRedux(id))} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
   
    </>
  );
};
