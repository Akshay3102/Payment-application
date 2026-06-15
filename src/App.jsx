import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./pages/Registration/Registation";
import BusinessLoan from "./pages/BusinessLoan/BusinessLoan";

import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />

        <Route
          path="/business-loan"
          element={
            <MainLayout>
              <BusinessLoan />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
