// @flow
export const generateEmptyRow = (length: number = 50) => Array(length).fill(0)

export const generateEmptyBoard = (length: number = 50) => {

  const board = generateEmptyRow(length)
  for (let i = 0; i < board.length; i += 1) {

    board[i] = generateEmptyRow(length)

  }
  return board

}

export const toggleInRow = (y, row) => row.map((cell, j) => {

  if (y === j) return cell ? 0 : 1
  return cell

})

export const toggleInBoard = (x, y, board) => board.map((row, i) => {

  if (x === i) return toggleInRow(y, row)
  return row

})
