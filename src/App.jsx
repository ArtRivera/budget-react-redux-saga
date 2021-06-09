import React, {useState, useEffect} from 'react';
import "./App.css";
import { Container} from "semantic-ui-react";
import { MainHeader } from "./components/MainHeader";
import { NewEntryForm } from "./components/NewEntryForm";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import { EntryList } from "./components/EntryList";
import {ModalEdit} from './components/ModalEdit';

import {useSelector,useDispatch} from 'react-redux';
import { getAllEntries } from './actions/entries.actions';


function App() {

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = useSelector(state => state.entries);
  const {isModalOpen,id} = useSelector(state => state.modal);
  const dispatch = useDispatch();

  // console.log(entries);



  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.forEach(entry => {
      if (entry.isExpense) {
       return totalExpenses += entry.value;
      }
      return totalIncome += entry.value;
    });
    setTotal(totalIncome - totalExpenses);
    setIncomeTotal(totalIncome);
    setExpensesTotal(totalExpenses);
  }, [entries])


  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch])

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />
      <DisplayBalances totalIncome={incomeTotal} totalExpenses={expensesTotal}/>

      <MainHeader title="History" type="h3" />

      <EntryList entries={entries}/>
     
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
      <ModalEdit 
        isOpen={isModalOpen}
        id={id}
        entries={entries}
      />
    </Container>
  );
}

export default App;
