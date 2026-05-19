import React from "react"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Posts from "./components/Todo/Posts";
import Layout from "./components/Todo/Layout";
import SearchInput from "./SearchInput";
import SearchPage from "./components/Debounce/SearchPage";
import Table from "./components/Pagination/Table";
import { getUsers, getLength } from "./api/Users";
import Pagination from "./components/Pagination/Pagination";
import Home from "./components/InfiniteScroll/Home";

const App = () => {

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);


  return (
    <BrowserRouter>
      <Routes>

        {/* front Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Other Page */}

        <Route path="/posts"
          element={
            <Layout>
              <Posts />
            </Layout>
          }
        />

        {/* Debounce Input Search */}

        <Route path="/DebounceWiki"
          element={<SearchPage />}
        />

        {/* Pagination */}

        <Route path="/Pagination"
          element={<Table
            users={getUsers(page, limit)}
            page={page}
            limit={limit}
            total={getLength()}
            setPage={setPage}
          />
          }
        />

        <Route path="/InfiniteScroll"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter >
  )
};

export default App;