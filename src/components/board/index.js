// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextStep } from '../../modules/game'
import type { GameState } from '../../modules/game'
import Header from './view'

type State = { board: GameState }
type Dispath = { nextStep: Function }

const mapStateToProps = state => ({ board: state.game.board })

const mapDispatchToProps = dispatch => ({
  nextStep: bindActionCreators(nextStep, dispatch),
})

export type ReduxProps = State & Dispath

export default connect(mapStateToProps, mapDispatchToProps)(Header)
