import React, { Fragment, lazy, Suspense } from "react";
import { GlobalStyle } from "../GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ErrorBoundary from "./pages/ErrorBoundary";
import Loading from "./components/Loading";
import ErrorTest from "./components/ErrorTest";

let Home = lazy(() => import("./pages/Home"));
let ProfileOutlet = lazy(() => import("./pages/ProfileOutlet"));
let GetAllRepo = lazy(() => import("./pages/AllRepos"));
let GetSingleRepo = lazy(() => import("./pages/SingleRepo"));
let SearchProfiles = lazy(() => import("./pages/SearchProfiles"));
let ContactUs = lazy(() => import("./pages/Contact"));
let Error = lazy(() => import("./pages/Error"));

function App() {
  const theme = {
    mediaQuery: {
      smobile: "400px",
      mobile: "767px",
      tablet: "960px",
      desktop: "1200px",
    },
  };
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<ProfileOutlet />}>
                <Route path="all-repo" element={<GetAllRepo />} />
                <Route path=":repoId" element={<GetSingleRepo />} />
              </Route>
              <Route path="/error-test" element={<ErrorTest />} />
              <Route path="/search-profile" element={<SearchProfiles />} />
              <Route path="/contact-me" element={<ContactUs />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
