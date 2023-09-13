import React, { useState, useLayoutEffect, useRef } from 'react';
import './App.css';

function App() {
  const [width, setWidth] = useState(0);
  const [color, setColor] = useState("black");
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.offsetWidth;

      // Mesurer la largeur après que le DOM a été rendu
      setWidth(divWidth);

      // Ajuster la couleur du texte en fonction de la largeur
      if (divWidth < 200) {
        setColor("red");
      } else if (divWidth < 400) {
        setColor("orange");
      } else {
        setColor("green");
      }
    }
  }, []);  // Notez le tableau de dépendances vide pour n'exécuter cela qu'au montage

  return (
    <div className="App">
      <div 
        ref={divRef} 
        style={{width: '60%', margin: 'auto', backgroundColor: 'lightgrey', color}}
      >
        La largeur de cette div est {width}px
      </div>
    </div>
  );
}

export default App;
