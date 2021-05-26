import React from 'react';
import { Grid, Segment  } from 'semantic-ui-react';
import {DisplayBalance} from './DisplayBalance';

export const DisplayBalances = ({totalIncome = 0, totalExpenses = 0}) => {
    return (
        <Segment textAlign='center'>
                 <Grid columns={2} divided> 
                   <Grid.Row>
                     <Grid.Column>
                        <DisplayBalance title="Income:" color="green" value={totalIncome}/>
                     </Grid.Column>
                     <Grid.Column>
                     <DisplayBalance title="Expenses:" color="red" value={totalExpenses}/> 
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>
             </Segment>
    )
}
