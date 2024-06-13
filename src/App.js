import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import store from "./utils/redux/store";

import Header from "./components/Header";
import Body from "./components/Body";
import MainContainer from "./components/mainContainer/MainContainer";
import WatchPage from "./components/watchPage/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/",
        element: <MainContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
