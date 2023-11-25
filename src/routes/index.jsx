import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { BaseLayout } from "../layouts/BaseLayout";

import { Home } from "../pages/Home";
import { Page1 } from "../pages/Page1";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { PageError } from "../pages/PageError";

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <BaseLayout />,
//     errorElement: <PageError />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/page1',
//         element: <Page1 />,
//       },
//       {
//         path: '/page2',
//         element: <Home />,
//       },
//     ],
//   },
// ]);

const auth = true;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<PageError />}>
      {auth ? (
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Home />} />
        </Route>
      ) : (
        <Route path="/">
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      )}
    </Route>,
  ),
);
