import styles from "./app.module.css";
import { NewQuote } from "./components/new_quote/NewQuote";
import { Quote } from "./components/quote/Quote";

function App() {
  return (
    <div className={styles.container}>
      <h1>{"Random Quotes!"}</h1>
      <Quote />
      <NewQuote />
    </div>
  );
}

export default App;
