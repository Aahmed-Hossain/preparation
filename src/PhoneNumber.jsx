import { useState } from "react";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
const handleInputChange = (e)=>{
    const input = e.target.value.replace(/\D/g, '')
    setPhoneNumber(formatPhoneNumber(input));
};
const formatPhoneNumber = (input) => {
    if(input.length <=  3 ){
return `(${input}`
    }else if(input.length <=6){
        return `(${input.slice(0,3)})${input.slice(3)}`
    }else{
     return `(${input.slice(0,3)})${input.slice(3, 6)}-${input.slice(6,10)}`
    }
}

  return (
    <div>
      <input
        type="text"
        value={phoneNumber}
        onChange={handleInputChange}
        maxLength="13" // Max length to prevent additional input beyond (999)999-9999
      />
      <div>{phoneNumber}</div>
    </div>
  );
};

export default PhoneNumber;
