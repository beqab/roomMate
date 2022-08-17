import React from "react";
import { Button } from "../common/form";

const PayModal = () => {
  return (
    <div className="payModal_wrapper">
      <div className="buyModal">
        <h2>სერვისის სარგებლობისთვის საჭიროა მომსახურების საფასურის გადახდა</h2>
        <div>
          <p className="text-center">მომსახურების საფასური 10 ₾</p>
          <div className="d-flex align-items-center w-100 justify-content-center">
            <Button className="btn btn-light mr-3">გაუქმება</Button>
            <Button className="btn btn-primary">გადახდა</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayModal;
