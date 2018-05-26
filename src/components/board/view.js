import React, { Component } from 'react'
import Cell from './cell'

type Props = { board: Array }

class BoardComponent extends Component<Props> {

  // map board cells to html cell components
  renderCells = () => this.props.board.map((row, i) => row.map((cell, j) => <Cell key={`c${i}${j}`} value={cell} />))

  render = () => (
    <div className="board">
      {this.renderCells()}
    </div>
  )

}

export default BoardComponent
