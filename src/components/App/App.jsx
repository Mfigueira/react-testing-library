import ColorButton from '../ColorButton/ColorButton';

export const separateCamelCaseWithSpaces = str => {
  return str.replace(/\B([A-Z])\B/g, ' $1');
};

const App = () => {
  return (
    <div>
      <h1>App</h1>

      <ColorButton />
    </div>
  );
};

export default App;
