import React, { useEffect, useState } from "react";
import { apiTest } from "../../utils/api_calls";
import s from './ClickToCall.module.scss';

const ClickToCall = () => {
  // const [callData, setCallData] = useState({});
  // useEffect(() => {
  //   const _bootstrap = async () => {
  //     const data = await apiTest();
  //     console.log("data", data["script test"]);
  //     setCallData(data["script test"]);
  //   };
  //   _bootstrap();
  // }, []);
  return (
    <>
      <div className="dropdown" id="valueItemDrop">
        <button className="selectbox" id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Select
        </button>
        <ul className="dropdown-menu" aria-labelledby="dLabel">
            <li className="checkbox form-group">
                <input type="checkbox" id="valuePot" value="Value Pot" name="Value Pot" />
                <label htmlFor="valuePot">Value Pot</label>
            </li>
            <li className="checkbox form-group">
                <input type="checkbox" id="payback" value="Payback" name="Payback" />
                <label htmlFor="payback">Payback</label>
            </li>
            <li className="checkbox form-group">
                <input type="checkbox" id="writeOff" value="Write-off" name="Write-off" />
                <label htmlFor="writeOff">Write-off</label>
            </li>
        </ul>
    </div>
    </>
  );
};

export default ClickToCall;


// import React, { useEffect, useState } from "react";
// import { apiTest } from "../../utils/api_calls";
// import s from './ClickToCall.module.scss';

// const ClickToCall = () => {
//   const [callData, setCallData] = useState({});
//   useEffect(() => {
//     const _bootstrap = async () => {
//       const data = await apiTest();
//       console.log("data", data["script test"]);
//       setCallData(data["script test"]);
//     };
//     _bootstrap();
//   }, []);
//   return (
//     <div className={s.root}>
//       <span>{callData.labels}</span>
//       <span>{callData.phone_number}</span>
//     </div>
//   );
// };

// export default ClickToCall;
