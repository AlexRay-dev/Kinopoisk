import Catalog from "./pages/catalog";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Search from "./pages/search";
import DetailsFilm from "./pages/details-film";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalog />} />
        <Route path="film/:id" element={<DetailsFilm />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default App;
