import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import _ from 'lodash'
import axios from 'axios'
import { getRoot } from '../../../utils/config'
const ROOT = getRoot()

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 40,
        bottom: 0
    },
    trackpad: {
        position: 'absolute',
        top: 5,
        left: 5,
        bottom: 5,
        right: 50,
        background: 'darkgrey',
        fontSize: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: 10,
        opacity: .3
    },
    mouseBtns: {
        position: 'absolute',
        top: 5,
        bottom: 5,
        right: 5,
        width: 40,
        // backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        // alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        '& .btn': {
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'darkgrey'
        },
        '& .btn + .btn': {
            marginTop: 2
        },
        '& .btn svg': {
            transform: 'scale(1.2)'
        }
    }
})

const Trackpad = props => {
    const classes = useStyles()
    // const [p, setP] = useState({})
    let prevMousePos = null
    let pollTime = 100

    // useEffect(() => {
    //     axios.post('http://192.168.0.102:9090/move-mouse', {x: 99, y: 102})
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // }, [])

    const setMousePrev = e => {
        const pageX = Math.round(e.pageX || e.touches[0].pageX)
        const pageY = Math.round(e.pageY || e.touches[0].pageY)
        prevMousePos = { x: pageX, y: pageY }
    }

    const unsetMousePrev = () => setTimeout(() => prevMousePos = null, pollTime + 10) 

    const trackMouse = e => {
        if(!prevMousePos) return
        // const { pageX, pageY } = e
        const pageX = Math.round(e.pageX || e.touches[0].pageX)
        const pageY = Math.round(e.pageY || e.touches[0].pageY)
        // console.log(pageX, pageY)
        // setP({ x: pageX, y: pageY })
        sendMousePos({ x: pageX, y: pageY })
    }
    const sendMousePos = _.throttle(pos => {
        const diff = {
            x: pos.x - prevMousePos.x,
            y: pos.y - prevMousePos.y
        }

        // console.log(pos)
        prevMousePos = pos

        post(`${ROOT}/mouse-move`, diff)
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
    }, 
    pollTime)

    const post = (url, data) => axios.post(url, data)

    /**
     * button = "left" | "right" | "middle"
     * clickType = "click" | "double" | "down" | "up"   
     */
    const postMouseClick = (button, clickType) => post(`${ROOT}/mouse-click`, { button, clickType })

    const mouseLC = e => { postMouseClick('left', 'click') }
    const mouseRC = e => { postMouseClick('right', 'click') }
    const mouseDC = e => { postMouseClick('left', 'double') }
    const kbUpArrow = e => {}
    const kbDownArrow = e => {}

    return (
        <div className={classes.root}>
            <div className={classes.trackpad} 
                onTouchStart={setMousePrev}
                onTouchEnd={unsetMousePrev}
                onTouchMove={trackMouse}
                onClick={mouseLC}
                onDoubleClick={mouseDC}
            >
                TRACKPAD 
                
            </div>
            <div className={classes.mouseBtns}>
                <span className="btn ripple" onClick={kbUpArrow}>
                    <ArrowUpwardIcon />
                </span>
                <span className="btn ripple" onClick={kbDownArrow}>
                    <ArrowDownwardIcon />
                </span>
                <span className="btn ripple" onClick={mouseLC}>L</span>
                <span className="btn ripple" onClick={mouseRC}>R</span>
                <span className="btn ripple" onClick={mouseDC}>D</span>
            </div>
        </div>
    )
}

export default Trackpad