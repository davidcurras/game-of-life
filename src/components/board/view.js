// @flow
import React, { Component } from 'react'
import Cell from './cell'
import type { ReduxProps } from './'

type Props = { board: Array } & ReduxProps

class BoardComponent extends Component<Props> {

  componentWillReceiveProps(nextProps) {

    const { nextStep, board } = this.props
    const { isPlaying, board: nextBoard } = nextProps
    if (isPlaying && board && nextBoard !== board) {

      setTimeout(() => nextStep(board), 1000)

    }

  }

  nextStepHandler = () => this.props.nextStep(this.props.board)

  playGameHandler = () => {

    const { nextStep, togglePlay, isPlaying } = this.props
    if (!isPlaying) nextStep(this.props.board)
    togglePlay()

  }

  // maps board cells to html cell components
  renderCells = () => this.props.board.map((row, x) => row.map((cell, y) => <Cell key={`c${x}${y}`} x={x} y={y} value={cell} />))

  render = () => (
    <div>
      <div className="board">
        {this.renderCells()}
      </div>
      <button type="button" className="button" onClick={this.nextStepHandler} disabled={this.props.isPlaying}>
        Next Step!
      </button>
      <button type="button" className="button" onClick={this.playGameHandler}>
        {this.props.isPlaying ? 'Stop Game!' : 'Start Game!'}
      </button>
    </div>
  )

}

export default BoardComponent
