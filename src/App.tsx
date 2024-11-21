import { QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./api/queryClient";
import Error from "./components/commons/Error";
import ToastContainer from "./components/commons/toast/ToastContainer";
import Layout from "./components/layout/Layout";
import { BookStoreThemeProvider } from "./context/ThemeContext";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";

const routeList = [
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/reset",
    element: <ResetPassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/book/:bookId",
    element: <BookDetail />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/orderlist",
    element: <OrderList />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookStoreThemeProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </BookStoreThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
