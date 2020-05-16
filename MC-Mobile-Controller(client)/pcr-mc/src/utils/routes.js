import MouseIcon from '@material-ui/icons/Mouse'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import StarsIcon from '@material-ui/icons/Stars'

import {
    Trackpad, Keyboard, Gamepad, SavedControls
}
from '../components/page-modules'

export const headerbarRoutes = [
    {
        name: 'Saved Controls',
        icon: StarsIcon,
        path: '/saved-controls',
        component: SavedControls
    },
    {
        name: 'Game Controller',
        icon: SportsEsportsIcon,
        path: '/gamepad',
        component: Gamepad
    },
    {
        name: 'Keyboard',
        icon: KeyboardIcon,
        path: '/keyboard',
        component: Keyboard
    },
    {
        name: 'Mouse Trackpad',
        icon: MouseIcon,
        path: '/trackpad',
        component: Trackpad
    }
]