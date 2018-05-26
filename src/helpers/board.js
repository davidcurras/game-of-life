export const generateEmptyRow = (length: number) => Array(length).fill(0)

export const generateEmptyBoard = (length: number) => {

  const board = generateEmptyRow(length)
  for (let i = 0; i < board.length; i += 1) {

    board[i] = generateEmptyRow(length)

  }
  return board

}
