export const normalizePlayerNames = (players) =>
  players.map((player, index) => player || `Jogador #${index + 1}`);
