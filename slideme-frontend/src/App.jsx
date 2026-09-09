// src/App.jsx
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MapView from './components/MapView';
import MapHome from './components/MapHome';
import BottomNavBar from './components/BottomNavBar';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Register from './components/Register';
import DetailForm from './components/DetailForm';
import OTP from './components/OTP';
import Createpass from './components/Createpass';
import Forgotpass from './components/Forgotpass';
import Home from './components/Home';
import DestinationSelect from './components/DestinationSelect';
import ConfirmDestination from './components/ConfirmDestination';
import Towtruck from './components/Towtruck';
import PickupDetail from './components/PickupDetail';
import Waiting from './components/Waiting';
import Biddingcompleted from './components/Biddingcompleted';
import Payment from './components/Payment';
import QrPayment from './components/QrPayment';
import Waitpickup from './components/Waitpickup';
import Driveriscoming from './components/Driveriscoming';
import Datadriver from './components/Datadriver'; 
import Call from './components/Call';
import ChatCustomer from './components/Chat';
import ChatAdmin from './components/Chatadmin';
import Star from './components/Form';
import Tip from './components/Tip';
import Notifications from './components/notifications';
import { ChatProvider } from './components/ChatContext'; // ChatContext import

import DriverBottomNavBar from './driver/DriverBottomNavBar';
import SplashScreenDriver from './driver/SplashScreen';
import LoginDriver from './driver/Login';
import RegisterDriver from './driver/Register';
import Driveraccount from './driver/Driveraccount'; 
import Drivinglicense from './driver/Drivinglicense'; 
import OTPDriver from './driver/OTP';
import CreatepassDriver from './driver/Createpass';
import ForgotpassDriver from './driver/Forgotpass';
import ReceiveJob from './driver/ReceiveJob';
import Drivertobiding from './driver/Drivertobiding';
import Bidding from './driver/Bidding';
import PriceTable from './driver/table'; 
import WaitingDriver from './driver/Waiting';
import BiddingcompletedDriver from './driver/Biddingcompleted';
import HomeDriver from './driver/Home';
import JobDetail from './driver/Jobdetail';
import CheckDestination from './driver/CheckDestination';
import CallDriver from './driver/CallDriver';
import ChatDriver from './driver/DriverChat';
import NotificationsDriver from './driver/Notificationsdriver';
import Menu from './components/Menu';
import MenuDriver from './driver/Menu';
import Report from './components/report';
import SectionPage from "./SectionPage";
import PaymentDetails from "./Payment/payment-details";
import FAQDetails from "./FAQ/FAQDetails";
import Promacions from "./Promotions/Promacions";
import Private from "./Privacy&Security/Private";
import Aboutus from "./About/Aboutus";
import Profile from "./Profile/profile";
import HistoryPage from "./HistoryUser/HistoryPage";
import Informationapp from "./Accountinfo/Informationapp";
import Driverhistory from "./HistoryDriver/Driverhistory";
import Prodriver from "./Prodriver/Prodriver"; 
import SlideMeForm from "./SlideMeForm/SlideMeForm";
import DetailDriverForm from "./DetailDriver/Detaildriver";

// import LogicChatdriver from './driver/ChatDriver';
// import LogicChatcustomer from './components/ChatCustomer';

import AboutDeveloper from './About/AboutDeveloper';

import { PhoneProvider } from './PhoneContext'; // PhoneContext import

function App() {
  return (
    <PhoneProvider> {/* ห่อหุ้มแอปทั้งหมดด้วย PhoneProvider */}
      <ChatProvider> {/* ห่อหุ้ม ChatProvider */}
        <Router>
          <div className="app-container">
            <Routes>
              {/* เส้นทางของผู้ใช้ */}
              <Route path="/" element={<SplashScreen />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/detailform" element={<DetailForm />} />
              <Route path="/otp" element={<OTP />} />
              <Route path="/createpass" element={<Createpass />} />
              <Route path="/forgotpass" element={<Forgotpass />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/home" element={<Home />} />
              <Route path="/destination" element={<DestinationSelect />} />
              <Route path="/confirmdestination" element={<ConfirmDestination />} />
              <Route path="/choosetowtruck" element={<Towtruck />} />
              <Route path="/pickupdetail" element={<PickupDetail />} />
              <Route path="/waiting" element={<Waiting />} />
              <Route path="/bidcom" element={<Biddingcompleted />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/qrpayment" element={<QrPayment />} />
              <Route path="/waitpickup" element={<Waitpickup />} />
              <Route path="/driveriscoming" element={<Driveriscoming />} />
              <Route path="/data-driver" element={<Datadriver />} />
              <Route path="/call" element={<Call />} />
              <Route path="/star" element={<Star />} />
              <Route path="/tip" element={<Tip />} />
              <Route path="/chat-admin" element={<ChatAdmin />} />
              <Route path="/chat-customer" element={<ChatCustomer />} />
              <Route path="/menu" element={<Menu />} />

              {/* เส้นทางของคนขับ */}
              <Route path="/driver" element={<SplashScreenDriver />} />
              <Route path="/login-driver" element={<LoginDriver />} />
              <Route path="/register-driver" element={<RegisterDriver />} />
              
              <Route path="/account-driver" element={<Driveraccount />} />
              <Route path="/driving-license" element={<Drivinglicense />} />
              <Route path="/otp-driver" element={<OTPDriver />} />
              <Route path="/createpass-driver" element={<CreatepassDriver />} />
              <Route path="/forgotpass-driver" element={<ForgotpassDriver />} />
              <Route path="/notifications-driver" element={<NotificationsDriver />} />
              <Route path="/receive-job" element={<ReceiveJob />} />
              <Route path="/drivertobiding" element={<Drivertobiding />} />
              <Route path="/biding-driver" element={<Bidding />} />
              <Route path="/pricetable" element={<PriceTable />} />
              <Route path="/waiting-driver" element={<WaitingDriver />} />
              <Route path="/bidcom-driver" element={<BiddingcompletedDriver />} />
              <Route path="/home-driver" element={<HomeDriver />} />
              <Route path="/jobdetail" element={<JobDetail />} />
              <Route path="/checkdestination" element={<CheckDestination />} />
              <Route path="/call-driver" element={<CallDriver />} />
              <Route path="/chat-driver" element={<ChatDriver />} />
              <Route path="/menu-driver" element={<MenuDriver />} />

              {/* Khing */}
              <Route path="/detail-driverform" element={<DetailDriverForm />} /> 
              <Route path="/report" element={<Report />} />
              <Route path="/section" element={<SectionPage />} />
              <Route path="/payment-details" element={<PaymentDetails />} />
              <Route path="/FAQDetails" element={<FAQDetails />} />
              <Route path="/Promacions" element={<Promacions />} />
              <Route path="/Private" element={<Private />} />
              <Route path="/Aboutus" element={<Aboutus />} />
              <Route path="/Informationapp" element={<Informationapp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/driverhis" element={<Driverhistory />} />
              <Route path="/prodriver" element={<Prodriver />} /> 
              <Route path="/slideMeForm" element={<SlideMeForm />} /> 

              {/* <Route path="/logicchat-driver" element={<LogicChatdriver />} />
              <Route path="/logicchat-customer" element={<LogicChatcustomer />} /> */}

              {/* About Developer */}
              <Route path="/aboutdev" element={<AboutDeveloper />} />
              {/* Home */}
              <Route
                path="/home"
                element={
                  <>
                    <Navbar />
                    <div className="input-container">
                      {/* Search input form */}
                    </div>
                    <MapView />
                    <MapHome />
                    <DriverBottomNavBar />
                    <BottomNavBar />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </ChatProvider>
    </PhoneProvider>
  );
}

export default App;