import { useState } from 'react';

const ColorButton = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: btnDisabled ? 'gray' : color }}
        onClick={() => setColor(newColor)}
        disabled={btnDisabled}
      >
        Change to {newColor}
      </button>

      <label>
        Disable button
        <input
          type="checkbox"
          checked={btnDisabled}
          onChange={() => setBtnDisabled(btnDisabled => !btnDisabled)}
        />
      </label>
    </div>
  );
};

export default ColorButton;
