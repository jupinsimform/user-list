import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
import { FadeLoader } from "react-spinners";
import MainContainer from "./containers/MainContainer";

const MainContainerLazy = lazy(() => import("./containers/MainContainer"));

function App() {
  return (
    <div className="App">
      {/* <Suspense
        fallback={<FadeLoader className="loader" color="rgb(250, 184, 61)" />}
      > */}
      {/* <MainContainerLazy /> */}
      <MainContainer />
      {/* </Suspense> */}
    </div>
  );
}

export default App;
