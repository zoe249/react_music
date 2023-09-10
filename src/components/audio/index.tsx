import { useState, useEffect, createRef, FunctionComponent } from "react"
import './style.scss'
import store from "@/store"
import { musicType } from "@/store/music/types"
import { formatTime } from "@/utils"

const Audio = () => {
  const [isShow, setShow] = useState(false)
  const [musicInfo, setMusicInfo] = useState<musicType>()
  const [isPlay, updatePlay] = useState(false)
  const [cWdith, setCWidth] = useState(0)
  const [cTime, setCTime] = useState('00:00')
  const [isMove, setIsMove] = useState(false)
  const [totalTime, setTotalTime] = useState('00:00')
  const audioRef = createRef<HTMLAudioElement>()
  const imgRef = createRef<HTMLImageElement>()
  const maxBarRef = createRef<HTMLDivElement>()
  let audioDom: any
  let barOffsetLeft: number = 0
  let barWidth: number = 0
  let currentTime = 0

  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      setMusicInfo(store.getState().music)
      play()
    })
    return () => unsubscribe()
  })

  const onPause = () => pause()

  const onPlay = () => {

    setTotalTime(formatTime(musicInfo?.duration as number / 1000))
  }

  const onTimeUpdate = (val: any) => {
    setCWidth(parseInt((val.target.currentTime) / parseInt((musicInfo?.duration! / 1000) + '') * 100 + ''))
    setCTime(formatTime(val.target.currentTime))
  }

  const play = () => {
    updatePlay(false)
    imgRef.current && (imgRef.current!.style.animationPlayState = 'running')
    audioRef.current?.play()
    audioDom = audioRef.current
  }
  const pause = () => {
    updatePlay(true)
    imgRef.current && (imgRef.current!.style.animationPlayState = 'paused')
    audioRef.current?.pause()
  }

  const touchStart = () => {
    barOffsetLeft = maxBarRef.current?.offsetLeft!
    barWidth = maxBarRef.current?.clientWidth!
    document.addEventListener('touchmove', touchMove)
    document.addEventListener('touchend', touchEnd)
    setIsMove(true)
  }
  const touchMove = (e: any) => {

    const w: number = Number(((e.targetTouches[0].clientX) - barOffsetLeft).toFixed(0))
    const cw: number = Number((w / barWidth).toFixed(2))
    currentTime = (musicInfo?.duration! / 1000) * cw
    // console.log(currentTime)
    // audioRef.current && console.log(audioRef.current!.currentTime)

    setCWidth(parseInt((cw * 100) + ''))
  }
  const touchEnd = () => {

    // audioRef.current && (audioRef.current!.currentTime = parseInt(currentTime + ''))
    // console.log(parseInt(currentTime + ''))audioRef.current!.currentTime
    setTimeout(() => {
      audioDom.currentTime = 30
    }, 500);
    setIsMove(false)
    document.removeEventListener('touchmove', () => {
    })
  }

  const updateContral = (val: boolean) => setShow(val)
  return (
    musicInfo?.id ?
      <div className="audio-control">
        {/* 迷你控件 */}
        <div className="mini-control" style={{ backgroundImage: `url(${musicInfo?.picUrl})` }}>
          <div className="left">
            <img src={musicInfo?.picUrl} onClick={() => updateContral(true)} />
            <div className="name">
              <span>{musicInfo?.name}</span>
              <span> - </span>
              <span className="author">{musicInfo?.author}</span>
            </div>
          </div>
          <div className="right">
            {
              isPlay ? <i className="iconfont icon-bofang1" onClick={play}></i> : <i className="iconfont icon-pause-circle" onClick={pause}></i>
            }
            <i className="iconfont icon-liebiao"></i>
          </div>
        </div>

        {/* 主控件 */}
        <div className={isShow ? 'main-contral main-contral-animation' : 'main-contral'} style={isShow ? { backgroundImage: `url(${musicInfo?.picUrl})` } : { display: 'none' }} >
          <div className="top">
            <i onClick={() => updateContral(false)} className="iconfont icon-xitongfanhui"></i>
            <div className="music-name">
              <div>Remember When</div>
              <div>author</div>
            </div>
            <i className="iconfont icon-xitongfanhui"></i>
          </div>
          <div className="main-content">
            <div className="main-img">
              <img ref={imgRef} src={musicInfo.picUrl} alt="" />
            </div>
          </div>
          <div className="main-control">
            <div ref={maxBarRef} className="bar">
              <div className="max-bar"></div>
              <div className="active-bar">
                <div className="current-bar" style={{ width: `${cWdith}%` }}></div>
                <div className={isMove ? 'ball ismove' : 'ball'} onTouchStart={touchStart}></div>
              </div>
              <div className="time">
                <span>{cTime}</span>
                <span>{totalTime}</span>
              </div>
            </div>
            <div className="icon">
              <div className="xunhuan iconfont">
                <i className="iconfont icon-caozuo-xunhuan1"></i>
              </div>
              <div className="shangyishou iconfont">
                <i className="iconfont icon-shangyishou"></i>
              </div>
              <div className="play iconfont">
                {
                  isPlay ?
                    <i onClick={play} className="iconfont icon-bofang1"></i>
                    :
                    <i onClick={pause} className="iconfont icon-pause-circle"></i>
                }
              </div>
              <div className="xiayishou iconfont">
                <i className="iconfont icon-shangyishou"></i>
              </div>
              <div className="liebiao iconfont">
                <i className="iconfont icon-liebiao"></i>
              </div>
            </div>
          </div>
        </div>
        <audio
          ref={audioRef}
          autoPlay={true}
          src={musicInfo?.musicUrl}
          onPlay={onPlay}
          onPause={onPause}
          onTimeUpdate={onTimeUpdate}
        />
      </div>
      :
      <div></div>
  )
}

/**
 * 迷你控件
 */
function MiniAudio(options: any) {
  const { isPlay, play, isShow, pause, musicInfo, updateContral } = options
  return (
    musicInfo?.id ? (

      <div className="mini-control" style={isShow ? { display: 'none' } : { backgroundImage: `url(${musicInfo.picUrl})` }}>
        <div className="left">
          <img src={musicInfo?.picUrl} onClick={() => updateContral(true)} />
          <div className="name">
            <span>{musicInfo?.name}</span>
            <span> - </span>
            <span className="author">{musicInfo?.author}</span>
          </div>
        </div>
        <div className="right">
          {
            isPlay ? <i className="iconfont icon-bofang1" onClick={play}></i> : <i className="iconfont icon-pause-circle" onClick={pause}></i>
          }
          <i className="iconfont icon-liebiao"></i>
        </div>
      </div>

    ) : (
      <div></div>
    )
  )
}

/**
 * 控件
 */
const MainAudio: FunctionComponent = (options: any) => {
  const { isPlay, play, isShow, pause, musicInfo, updateContral } = options
  return <div className="main-contral" style={isShow ? { display: 'none' } : {}} onClick={() => updateContral(false)}>

  </div>
}

export default Audio
