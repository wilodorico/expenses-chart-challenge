import ExpenseOfWeek from "./components/ExpenseOfWeek";
import Footer from "./components/Footer";
import MyBalance from "./components/MyBalance";
import Layout from "./UI/Layout";

const App = () => {
  return (
    <Layout>
      <MyBalance />
      <ExpenseOfWeek />
      <Footer />
    </Layout>
  );
}

export default App;
