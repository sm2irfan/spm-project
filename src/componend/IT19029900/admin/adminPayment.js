import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminPayment = () => {
  const [pay, setpay] = useState([]);
  const [SearchPay, setSearchPay] = useState(false);
  const [SearchID, setSearchID] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/payments/get"
      );
      setpay(data);
    };
    sendRequest();
  }, []);

  useEffect(() => {
    const data2 = pay.filter(function (mov) {
      if (mov._id.includes(SearchID)) {
        return mov;
      } else {
        return null;
      }
    });

    if (data2.length !== 0) {
      setSearchPay(data2);
    }
  }, [SearchID]);

  console.log(pay);
  console.log(SearchPay);
  console.log(SearchID);

  return (
    <React.Fragment>
      <h1 class="text-center"> Payment Details </h1>
      <br></br>

      <div className="col-md-11">
        <div class="input-group mb-3">
          <input
            class="form-control"
            type="text"
            placeholder="Find By Name..."
            onChange={(e) => {
              setSearchID(e.target.value);
            }}
          />
        </div>

        <br></br>
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Customer</th>
              <th>Addreass</th>
              <th>TotalPrice</th>
              <th>State</th>
            </tr>
          </thead>
          {(SearchPay || pay).map((pay) => (
            <tbody>
              <tr>
                <th>{pay._id}</th>
                <td>{pay.lastname}</td>
                <td>{pay.address}</td>
                <td>{pay.totalPrice}</td>
                <td>{pay.state}</td>
                <td>
                  <button class="btn btn-primary btn-block">Approve</button>
                </td>
                <td>
                  <button class="btn btn-primary btn-block">Deliver</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
};

export default AdminPayment;
