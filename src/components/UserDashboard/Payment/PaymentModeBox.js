import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'cash', label: 'Cash' },
  { value: 'cashless', label: 'Cashless' }
];


export default function PaymentModeBox() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="payment-mode-box" style={{width: '120px', margin: "10px 0"}}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}