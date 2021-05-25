import React from 'react';
import { Grid, Segment  } from 'semantic-ui-react';
import {DisplayBalance} from './DisplayBalance';

export const DisplayBalances = () => {
    return (
        <Segment textAlign='center'>
                 <Grid columns={2} divided> 
                   <Grid.Row>
                     <Grid.Column>
                        <DisplayBalance title="Income:" color="green" value={1254.36}/>
                     </Grid.Column>
                     <Grid.Column>
                     <DisplayBalance title="Expenses:" color="red" value={623.50}/> 
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>
             </Segment>
    )
}
