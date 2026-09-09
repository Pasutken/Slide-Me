import "./Table.css";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }
  return (
    <div className="table-container">
      <div>
        <button className="table-back-btn bi bi-arrow-left" onClick={handleGoBack}></button>
      </div>
      <div className="table">
        <h1>รายละเอียดราคา</h1>
        <table className="custom-table">
          <thead>
            <tr>
              <th>ระยะทาง (กิโลเมตร)</th>
              <th>ราคา (บาท)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 - 15</td>
              <td>1,800</td>
            </tr>
            <tr>
              <td>16 - 30</td>
              <td>2,300</td>
            </tr>
            <tr>
              <td>31 - 45</td>
              <td>2,600</td>
            </tr>
            <tr>
              <td>46 - 60</td>
              <td>2,800</td>
            </tr>
            <tr>
              <td>61 - 75</td>
              <td>3,100</td>
            </tr>
            <tr>
              <td>76 - 100</td>
              <td>3,500</td>
            </tr>
            <tr>
              <td>101 +</td>
              <td>ติดต่อราคาพิเศษ</td>
            </tr>
            <tr>
              <td>500 +</td>
              <td>ติดต่อราคาพิเศษ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
