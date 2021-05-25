import "./App.css";
import { Container} from "semantic-ui-react";
import { MainHeader } from "./components/MainHeader";
import { NewEntryForm } from "./components/NewEntryForm";
import { DisplayBalance } from "./components/DisplayBalance";
import { DisplayBalances } from "./components/DisplayBalances";
import { EntryLine } from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance:" value={2500.53} size="small" />
      <DisplayBalances />

      <MainHeader title="History" type="h3" />
      <EntryLine description="Test" value="500" />
      <EntryLine description="Expense1" value="500" isExpense={true} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
