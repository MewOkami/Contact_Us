import { Route, Routes } from "react-router-dom";
import { ContactUsPage } from "../pages/contactUsPage";
import { SuccessPage } from "../pages/SuccessPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactUsPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
};
