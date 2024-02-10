import { RouterMain } from "./routes/RoutesMain";
import { GlobalStyles } from "./styles/GlobalStyle";
import { Reset } from "./styles/Reset";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <ToastContainer />

      <RouterMain />
    </>
  );
}

export default App;
