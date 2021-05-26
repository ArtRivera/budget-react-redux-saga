import React, {useState, useEffect} from 'react';
import "./App.css";
import { Container} from "semantic-ui-react";
import { MainHeader } from "./components/MainHeader";
import { NewEntryForm } from "./components/NewEntryForm";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import { EntryList } from "./components/EntryList";
import {ModalEdit} from './components/ModalEdit';


const initialEntries = [
  {id:1,description: "Work Income", value: 10000, isExpense: false},
  {id:2,description: "Water Bill", value: 20000, isExpense: true},
  {id:3,description: "Rent", value: 300, isExpense: true},
  {id:4,description: "Power Bill", value: 50, isExpense: true},
]

function App() {

  const [entries, setEntries] = useState(initialEntries);
  const [form, setForm] = useState({
    description: "",
    value: "",
  });
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expensesTotal, setExpensesTotal] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

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
    console.log('Total Expenses', totalExpenses);
    console.log('Total INcomes', totalIncome);
  }, [entries])

  const { description, value } = form;

  const resetEntry = () => {
    setIsExpense(true);
    setForm({
      description: '',
      value:''
    })
  }

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleToggle = () => {
    setIsExpense((old) => !old);
  };


  const deleteEntry = (id) => () => {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  const editEntry = (id) =>{
    console.log('Edit entry ', id);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setForm({
        ...entry,
        description: entry.description,
        value: entry.value
      });
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  const addEntry = () => () => {
    const result = [...entries,{
      id: entries.length+1, 
      description,
      isExpense, 
      value: Number(value)}];
      setEntries(result);
      resetEntry()
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={total} size="small" />
      <DisplayBalances totalIncome={incomeTotal} totalExpenses={expensesTotal}/>

      <MainHeader title="History" type="h3" />

      <EntryList entries={entries} deleteEntry={deleteEntry} editEntry={editEntry}/>
     
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm 
      addEntry={addEntry}
      value={value}
      description={description}
      isExpense={isExpense}
      handleChange={handleChange}
      handleToggle={handleToggle}
      />
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen}
       addEntry={addEntry}
       value={value}
       description={description}
       isExpense={isExpense}
       handleChange={handleChange}
       handleToggle={handleToggle}
      />
    </Container>
  );
}

export default App;
