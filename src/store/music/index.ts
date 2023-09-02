import reducer from './reducer'
const music = {
  name: '起风了',
  musicUrl: '',
}

// const music = [
//   { name: 'one more time', musicUrl: '山崎俊义' },
//   { name: 'rain', musicUrl: '' },
// ]

function activeReducer(state: any = music, action: any) {
  if (action.type === 'update') {
    return {
      ...action,
    }
  } else {
    return state
  }
}

// function songListReducer(state: any = songList, action: any) {
//   const newSongs = songList
//   if (action.type === 'push') {
//     newSongs.push(action)
//     return newSongs
//   }
// }

export default reducer
