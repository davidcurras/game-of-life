// @flow
import { generateEmptyBoard, toggleInBoard } from '../helpers/board'
import getNextBoard from '../helpers/game-of-life'

type Row = Array<number>
type GameState = { board: Array<Row> }

export const TOGGLE_CELL = 'game-of-life/TOGGLE_CELL'
export const NEXT_STEP = 'game-of-life/NEXT_STEP'
export const TOGGLE_PLAY = 'game-of-life/TOGGLE_PLAY'

const initialState: GameState = {
  board: generateEmptyBoard(),
  isPlaying: false,
}

export default (state: GameState = initialState, action: number) => {

  switch (action.type) {

    case TOGGLE_CELL:
      return {
        ...state,
        board: toggleInBoard(action.x, action.y, state.board),
      }

    case NEXT_STEP:
      return {
        ...state,
        board: getNextBoard(state.board),
      }

    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      }

    default:
      return state

  }

}

export const toggleCell = (x, y) => ({ type: TOGGLE_CELL, x, y })

export const nextStep = () => ({ type: NEXT_STEP })

export const togglePlay = () => ({ type: TOGGLE_PLAY })
