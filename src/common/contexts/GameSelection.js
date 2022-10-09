import { createContext, useState } from 'react';

const GameSelectionContext = createContext({});

const GameSelectionContextProvider = ({ children }) => {
  const [game, setGame] = useState(null);

  return (
    <GameSelectionContext.Provider value={{ game, setGame }}>
      {children}
    </GameSelectionContext.Provider>
  );
};

export { GameSelectionContextProvider };
export default GameSelectionContext;
