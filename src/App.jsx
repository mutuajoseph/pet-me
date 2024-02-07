import { Box } from "@chakra-ui/react";
import AppLayout from "../layout";
import "./App.css";
import PetListing from "./components/PetListing";
import { Routes, Route } from "react-router-dom"
import SinglePet from "./pages/SinglePet";
import Cart from "./pages/Cart";

function App() {
  return (
    <AppLayout>
      <Routes>
          <Route path="/"  element={
            <Box h={'100vh'}>
            <PetListing />
          </Box>
          } />

          <Route path="/pets/:id" element={
            <Box h={'100vh'}>
            <SinglePet />
          </Box>
          }
            />

          <Route path="/cart" element={<Box height={'100ch'}>
            <Cart />
          </Box>} />
      </Routes>
      
    </AppLayout>
  );
}

export default App;
