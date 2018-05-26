// @flow
import { generateEmptyBoard } from './board'

const isAlive = (cell, i, j, board) => {

  let count = 0
  count += (board[i - 1] && board[i - 1][j - 1]) ? 1 : 0
  count += (board[i - 1] && board[i - 1][j]) ? 1 : 0
  count += (board[i - 1] && board[i - 1][j + 1]) ? 1 : 0
  count += board[i][j - 1] ? 1 : 0
  count += board[i][j + 1] ? 1 : 0
  count += (board[i + 1] && board[i + 1][j - 1]) ? 1 : 0
  count += (board[i + 1] && board[i + 1][j]) ? 1 : 0
  count += (board[i + 1] && board[i + 1][j + 1]) ? 1 : 0
  const turnOn = !cell && count > 2
  const stayOn = cell && (count === 2 || count === 3)
  return turnOn || stayOn

}

const getNextBoard = (board) => {

  const nextBoard = generateEmptyBoard()
  board.forEach((row, i) => row.forEach((cell, j) => {

    if (isAlive(cell, i, j, board)) {

      nextBoard[i][j] = 1

    }

  }))
  return nextBoard

}

export default getNextBoard
