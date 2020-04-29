import React, { useState } from "react";
import { SketchPicker } from "react-color";

const App = () => {
  const [color, setColor] = useState();
  const handleChange = color => setColor(color);
  return (
    <div className="App">
      <SketchPicker color={color} onChangeComplete={handleChange} />
    </div>
  );
};

export default App;
