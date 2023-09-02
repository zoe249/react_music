import { CHANGE_ADD, CHANGE_DELETE, CHANGE_UPDATE } from './constrants'
import { changeUpdateMusic } from './actionCreators'

const initMusic = {
  name: '起风了',
  musicUrl: '',
}

function reducer(state = initMusic, action: any) {
  // console.log(action)
  switch (action.type) {
    case CHANGE_UPDATE:
      return { ...action }
    default:
      return { ...state }
  }
}

export default reducer
