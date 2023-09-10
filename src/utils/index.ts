export const formatTime = (time: number | string) => {
  let minte: string | number = parseInt('' + parseInt('' + time) / 60)
  let second: string | number = parseInt('' + (parseInt('' + time) % 60))
  minte = minte >= 10 ? minte : '0' + minte
  second = second >= 10 ? second : '0' + second
  return minte + ':' + second
}
