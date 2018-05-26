import React from 'react'

type Props = { value: string }

const CellComponent = (props: Props) => {

  const background = props.value ? 'blackCell' : 'whiteCell'
  return <div className={`cell ${background}`} />

}

export default CellComponent
