import {
  type CategoryId,
  type WordEntry,
  wordBanks,
} from "../data/wordBanks";

export type Player = {
  id: string;
  name: string;
};

export type AssignedPlayer = Player & {
  role: "group" | "sly";
};

export type Round = {
  category: CategoryId;
  entry: WordEntry;
  players: AssignedPlayer[];
  firstPlayerIndex: number;
  direction: "clockwise" | "anticlockwise";
};

const randomIndex = (length: number) => {
  const buffer = new Uint32Array(1);
  crypto.getRandomValues(buffer);
  return buffer[0] % length;
};

export function suggestedImposters(playerCount: number) {
  if (playerCount <= 5) return 1;
  if (playerCount <= 12) return 2;
  return Math.max(2, Math.round(playerCount * 0.22));
}

export function createRound(
  players: Player[],
  categoryIds: CategoryId[],
  imposterCount: number,
  recentWords: string[] = [],
): Round {
  const categories = categoryIds.length
    ? categoryIds
    : (Object.keys(wordBanks) as CategoryId[]);
  const category = categories[randomIndex(categories.length)];
  const available = wordBanks[category].filter(
    ({ word }) => !recentWords.includes(word),
  );
  const pool = available.length ? available : wordBanks[category];
  const entry = pool[randomIndex(pool.length)];

  const indices = players.map((_, index) => index);
  for (let index = indices.length - 1; index > 0; index -= 1) {
    const next = randomIndex(index + 1);
    [indices[index], indices[next]] = [indices[next], indices[index]];
  }
  const slyIndices = new Set(indices.slice(0, imposterCount));

  const firstPlayerIndex = randomIndex(players.length);
  const direction = randomIndex(2) === 0 ? "clockwise" : "anticlockwise";

  return {
    category,
    entry,
    players: players.map((player, index) => ({
      ...player,
      role: slyIndices.has(index) ? "sly" : "group",
    })),
    firstPlayerIndex,
    direction,
  };
}

// Keeps an in-flight Vite HMR graph valid after SLY hints moved to each entry.
export function categoryHint() {
  return "Clue";
}
