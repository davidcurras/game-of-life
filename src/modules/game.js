// @flow
import { generateEmptyBoard, toggleInBoard } from '../helpers/board'
import getNextBoard from '../helpers/game-of-life'

type Row = Array<number>
type GameState = { board: Array<Row> }

export const CHANGE_CELL_STATUS = 'game-of-life/CHANGE_CELL_STATUS'
export const NEXT_STEP = 'game-of-life/NEXT_STEP'

const initialState: GameState = { board: generateEmptyBoard() }

export default (state: GameState = initialState, action: number) => {

  switch (action.type) {

    case CHANGE_CELL_STATUS:
      return {
        ...state,
        board: toggleInBoard(action.x, action.y, state.board),
      }

    case NEXT_STEP:
      return {
        ...state,
        board: getNextBoard(state.board),
      }

    default:
      return state

  }

}

export const toggleCell = (x, y) => ({ type: CHANGE_CELL_STATUS, x, y })

export const nextStep = () => ({ type: NEXT_STEP })
