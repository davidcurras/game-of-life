// @flow
import React, { Component } from 'react'
import Cell from './cell'
import type { ReduxProps } from './'

type Props = { board: Array } & ReduxProps

class BoardComponent extends Component<Props> {

  nextStepHandler = () => this.props.nextStep(this.props.board)

  playGameHandler = () => this.props.nextStep(this.props.board)

  // maps board cells to html cell components
  renderCells = () => this.props.board.map((row, x) => row.map((cell, y) => <Cell key={`c${x}${y}`} x={x} y={y} value={cell} />))

  render = () => (
    <div>
      <div className="board">
        {this.renderCells()}
      </div>
      <button type="button" className="button" onClick={this.nextStepHandler}>
        Next Step!
      </button>
      <button type="button" className="button" onClick={this.playGameHandler}>
        Start Game!
      </button>
    </div>
  )

}

export default BoardComponent
