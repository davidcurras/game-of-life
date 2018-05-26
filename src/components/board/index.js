import { connect } from 'react-redux'
import Header from './view'

const mapStateToProps = state => ({
  board: state.game.board,
})

export default connect(mapStateToProps)(Header)
