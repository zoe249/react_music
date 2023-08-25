import './style.scss'
import {useEffect, useState} from "react";
import { useNavigate, useLocation } from 'react-router-dom'
/**
 * 全局搜索组件
 */
export default function searchComponent(){
    const router = useNavigate()
    const placeholderList = ['起风了','晴天','毛不易新歌']
    const [current,setCurrent] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{
            clearInterval(timer)
            if(current === placeholderList.length-1) {
                setCurrent(0)
            }else{
                setCurrent(current+1)
            }
        },3000)
    })
    const handlePush = (value:string) => {
        console.log(value)
        router('/search',{state:value})
    }
    return (
        <div className='search-wrap'>
            <div className='input-wrap'>
                <span className='input'></span>
                <span>搜索</span>
            </div>
            <div className={'search-placeholder'}>
                <div className={'animate-parent'} style={{ transformStyle: 'preserve-3d',transform: `translateY(${-current * 20}px)`}}>
                    {
                         placeholderList.map((item,index) => {
                            return <span onClick={()=>handlePush(item)} key={item} className={(index === current ? current - 1 === index? 'placeholderTop item' : 'placeholderBottom item':'item')}>{ item  }</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}