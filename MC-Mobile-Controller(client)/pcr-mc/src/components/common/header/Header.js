import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import { headerbarRoutes } from '../../../utils/routes'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        backgroundColor: '#000',
        height: 40,
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 40,
        '& > a': {
            display: 'inline-flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        '& > a > svg': {
            fontSize: 26,
            color: '#fff'
        }
    },
    menuBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '0 5px',
        height: '100%',
        fontSize: 26,
        color: '#fff'
    }
})

const Header = props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MenuIcon className={classes.menuBtn} />
            {
                headerbarRoutes.map (r => (
                    <Link to={r.path} key={r.name}>
                        <r.icon />
                    </Link>
                ))
            }
        </div>
    )
}

export default Header