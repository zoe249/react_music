import { useState } from "react"
/**
 * 音频播放控件
 */
export default function audio() {
  return (
    <div className="audio-control">
      <audio autoPlay={true} src='' />
    </div>
  )
}
