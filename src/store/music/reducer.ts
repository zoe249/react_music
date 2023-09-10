import { CHANGE_ADD, CHANGE_DELETE, CHANGE_UPDATE } from './constrants'
import { musicType } from './types'

const initMusic: musicType = {
  name: '起风了',
  musicUrl: '',
  author: '',
  picUrl: '',
}

function reducer(state = initMusic, action: any): musicType {
  switch (action.type) {
    case CHANGE_UPDATE:
      return { ...action }
    default:
      return { ...state }
  }
}

export default reducer
