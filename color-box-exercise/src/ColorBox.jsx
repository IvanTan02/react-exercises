import { useState } from 'react';
import './ColorBox.css';

function ColorBox({ colors }) {
  const initialColorIndex = getColorIndex(colors.length);
  const [index, setIndex] = useState(initialColorIndex);
  const style = { backgroundColor: colors[index] };

  const changeColor = () => {
    setIndex(getColorIndex(colors.length));
  };

  return <div className="ColorBox" style={style} onClick={changeColor}></div>;
}

function getColorIndex(numOfColors) {
  const index = Math.floor(Math.random() * numOfColors);
  return index;
}

export default ColorBox;
