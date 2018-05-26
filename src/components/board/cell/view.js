// @flow
import React, { Component } from 'react'
import type { ReduxProps } from './'

type Props = { value: string, x: number, y: number } & ReduxProps

class CellComponent extends Component<Props> {

  clickHandler = () => {

    const { toggleCell, x, y } = this.props
    toggleCell(x, y)

  }

  render() {

    const background = this.props.value ? 'black' : 'white'
    return <button className={`not-a-button cell ${background}`} onClick={this.clickHandler} />

  }

}

export default CellComponent
