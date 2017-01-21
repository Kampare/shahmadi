import { connect } from 'react-redux'

import WindowManager from '../components/window-manager'
import { destroyWindow } from '../actions'

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: (id) => {
      dispatch(destroyWindow(id))
    }
  }
}

const WindowManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WindowManager)

export default WindowManagerContainer
