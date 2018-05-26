// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleCell } from '../../../modules/game'
import Cell from './view'

type State = {}
type Dispath = { toggleCell: Function }

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  toggleCell: bindActionCreators(toggleCell, dispatch),
})

export type ReduxProps = State & Dispath

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
