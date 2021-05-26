import React from 'react';
import {EntryLine} from './EntryLine';

export const EntryList = ({entries = [], deleteEntry, editEntry}) => {
    return (
       <>
         {
            entries.map(entry => (
              <EntryLine key={entry.id} entry={entry} deleteEntry={deleteEntry} editEntry={editEntry}/>
            ))
          }
       </>
         
    )
}
