import { useState, useEffect, createRef, forwardRef } from "react"
import store from "@/store"
/**
 * 音频播放控件
 */
function Audio() {
  const [url, setUrl] = useState('')
  const audioRef = createRef<HTMLAudioElement>()
  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      setUrl(store.getState().music.musicUrl)
      audioRef.current?.play()
    })
    return () => unsubscribe()
  })


  return (
    <div className="audio-control">
      <audio ref={audioRef} autoPlay={true} src={url} />
    </div>
  )
}

export default Audio
