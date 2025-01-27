import { configureStore, createSlice } from "@reduxjs/toolkit";

import { WINS } from "../constants/gestures";

const initialState = {
  move: null,
  winner: null,
  score: Number(localStorage.getItem("score")) || 0,
};

const gameStore = createSlice({
  name: "game",
  initialState,
  reducers: {
    selectMove: (state, action) => {
      state.move = action.payload;
    },
    playAgain: (state) => {
      state.move = null;
      state.winner = null;
    },
    defineWinner: (state, action) => {
      if (action.payload.move === action.payload.cpuMove) {
        state.winner = "Tie";
      } else if (WINS[action.payload.move].includes(action.payload.cpuMove)) {
        state.score += 1;
        state.winner = "Win";
      } else {
        state.score -= 1;
        state.winner = "Lose";
      }

      localStorage.setItem("score", state.score);
    },
  },
});

const store = configureStore({
  reducer: { game: gameStore.reducer },
});

export const gameActions = gameStore.actions;
export default store;
