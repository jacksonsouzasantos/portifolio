import React, { useState, useEffect } from 'react';

function TypeWrite({ texto }) {
  const [textoAtual, setTextoAtual] = useState('');
  const [posicaoAtual, setPosicaoAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextoAtual(texto.substring(0, posicaoAtual + 1));
      setPosicaoAtual(posicaoAtual => posicaoAtual + 1);
    }, 75);

    return () => clearInterval(interval);
  }, [texto, posicaoAtual]);

  return (
    <div>
      <h1>{textoAtual}</h1>
    </div>
  );
}

export default TypeWrite;