import React from 'react'
import { makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { headerbarRoutes } from '../../../utils/routes'

const useStyles = makeStyles({
    root: {
        position: 'relative',
        listStyle: 'none',
        color: '#fff',
        backgroundColor: '#000',
        height: 40,
        display: 'flex',
        justifyContent: 'space-around',
        paddingLeft: 40,
        '& > li': {
            display: 'inline-flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        '& > li svg': {
            fontSize: 26
        }
    },
    menuBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '0 5px',
        height: '100%',
        fontSize: 26
    }
})

const Header = props => {
    const classes = useStyles()
    return (
        <ul className={classes.root}>
            <MenuIcon className={classes.menuBtn} />
            {
                headerbarRoutes.map (r => (
                    <li key={r.name}>
                        <r.icon />
                    </li>
                ))
            }
        </ul>
    )
}

export default Header