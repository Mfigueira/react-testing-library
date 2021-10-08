import { useState } from 'react';

const ColorButton = () => {
  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState('red');
  const newColor = color === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
        disabled={checked}
      >
        Change to {newColor}
      </button>

      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(checked => !checked)}
      />
    </div>
  );
};

export default ColorButton;
