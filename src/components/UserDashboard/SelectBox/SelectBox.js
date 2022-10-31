import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'relevent', label: 'Relevent' },
  { value: 'popular', label: 'Popular' },
  { value: 'recently', label: 'Recently' },
];


export default function SelectBox() {
  const [selectedOption, setSelectedOption] = useState(options[2]);

  return (
    <div className="" style={{width: '120px', float: 'right', margin: "10px 0"}}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}