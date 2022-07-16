import ExpenseOfWeek from "./components/ExpenseOfWeek";
import MyBalance from "./components/MyBalance";
import Layout from "./UI/Layout";

const App = () => {
  return (
    <Layout>
      <MyBalance />
      <ExpenseOfWeek />
    </Layout>
  );
}

export default App;
