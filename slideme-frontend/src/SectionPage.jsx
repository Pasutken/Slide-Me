import { useNavigate } from "react-router-dom";  
import FAQQuestions from "./FAQ/FAQQuestions";
import AboutPage from "./About/AboutPage";
import Information from "./Accountinfo/Information";
import Payment from "./Payment/Payment";
import Privacy from "./Privacy&Security/Privacy";
import Promotions from "./Promotions/Promotions";

function SectionPage() {
  const navigate = useNavigate();  

  const goBack = () => {
    navigate(-1);  
  };

  return (
    <div style={{ marginTop: '-160px',marginLeft: '-20px' }}>
      <button 
        onClick={goBack} 
        style={{ 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer', 
          position: 'relative', 
          top: '-15px',
          paddingLeft: '15px'
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
        </svg>
      </button>

      <FAQQuestions />
      <AboutPage />
      <Information />
      <Payment />
      <Privacy />
      <Promotions />
    </div>
  );
}

export default SectionPage;
