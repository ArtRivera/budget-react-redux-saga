import React from 'react';
import {EntryLine} from './EntryLine';

export const EntryList = ({entries = []}) => {
    return (
       <>
         {
            entries.map(entry => (
              <EntryLine key={entry.id} entry={entry}/>
            ))
          }
       </>
         
    )
}
