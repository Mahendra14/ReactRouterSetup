import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/MyProfile';
import About from './pages/Contacts';
import LayoutComponent from './Components/Layout';
import MyProfile from './pages/MyProfile';
import Contacts from './pages/Contacts';
interface AppProps {
  
}
const MailingAddressDuplicate = () => {
  return (
    <div>
      {/* Your duplicate mailing address component */}
      <h2>Mailing Address Duplicate</h2>
    </div>
  );
};

const Password = () => {
  return (
    <div>
      {/* Your password component */}
      <h2>Update Password</h2>
    </div>
  );
};

const Security = () => {
  return (
    <div>
      {/* Your security component */}
      <h2>Update Pin and Security Question</h2>
    </div>
  );
};

const UpdateProfile = () => {
  return (
    <div>
      {/* Your profile update component */}
      <h2>Update Profile</h2>
    </div>
  );
};

const PaperlessBilling = () => {
  return (
    <div>
      {/* Your paperless billing component */}
      <h2>Paperless Billing</h2>
    </div>
  );
};

const EasyPayOptions = () => {
  return (
    <div>
      {/* Your EasyPay options component */}
      <h2>EasyPay Options</h2>
    </div>
  );
};
const MailingAddress = () => {
  return (
    <div>
      {/* Your mailing address component */}
      <h2>Mailing Address</h2>
    </div>
  );
};
const Header = () => {
  return (
    <header>
      {/* Your header content goes here */}
      <h1>Common Header</h1>
    </header>
  );
};
const Footer = () => {
  return (
    <header>
      {/* Your header content goes here */}
      <h1>Common Footer</h1>
    </header>
  );
};
const App: FunctionComponent<AppProps> = () => {
  return (
    <BrowserRouter>
    <Header />
       <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile/contacts" element={<Contacts />} />
        <Route path="/myprofile/mailing-address" element={<MailingAddress />} />
        <Route path="/myprofile/mailing-address-2" element={<MailingAddressDuplicate />} />
        <Route path="/myprofile/password" element={<Password />} />
        <Route path="/myprofile/security" element={<Security />} />
        <Route path="/myprofile/update" element={<UpdateProfile />} />

        <Route path="/ibill" element={<div>Placeholder for iBill</div>}>
          <Route path="bill-delivery-options" element={<PaperlessBilling />} />
          <Route path="automatic-payments" element={<EasyPayOptions />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    // <LayoutComponent></LayoutComponent>
    );
}
 
export default App;

