// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextStep, togglePlay } from '../../modules/game'
import type { GameState } from '../../modules/game'
import Header from './view'

type State = { board: GameState, isPlaying: Boolean }
type Dispath = { nextStep: Function, togglePlay: Function }

const mapStateToProps = state => ({
  board: state.game.board,
  isPlaying: state.game.isPlaying,
})

const mapDispatchToProps = dispatch => ({
  nextStep: bindActionCreators(nextStep, dispatch),
  togglePlay: bindActionCreators(togglePlay, dispatch),
})

export type ReduxProps = State & Dispath

export default connect(mapStateToProps, mapDispatchToProps)(Header)
