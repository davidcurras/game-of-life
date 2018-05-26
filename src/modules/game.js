import { generateEmptyBoard } from '../helpers/board'

type Row = Array<number>
type State = { board: Array<Row> }

const initialState: State = { board: generateEmptyBoard(50) }

export default (state: State = initialState, action: number) => {

  switch (action.type) {

    default:
      return state

  }

}
