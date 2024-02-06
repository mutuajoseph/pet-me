import { Box } from "@chakra-ui/react";
import AppLayout from "../layout";
import "./App.css";
import PetListing from "./components/PetListing";

function App() {
  return (
    <AppLayout>
      <Box h={'100vh'}>
        <PetListing />
      </Box>
    </AppLayout>
  );
}

export default App;
