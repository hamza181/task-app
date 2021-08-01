import MyCard from "./Components/Card/MyCard";
import Counter from "./Components/Counter";
import Navbar from "./Layout/Header/Navbar/Navbar";
import 'antd/dist/antd.css';
import MyForm from "./Components/Form/MyForm";

function App() {
  return (
    <div>
      {/* <Counter></Counter> */}
      <Navbar></Navbar>
      {/* <MyCard></MyCard> */}
      <MyForm></MyForm>
    </div>
  );
}

export default App;
