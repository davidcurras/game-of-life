import { connect } from 'react-redux'
import Cell from './view'

const mapStateToProps = state => ({ test: state })

export default connect(mapStateToProps)(Cell)
