import {NavigationActions} from 'react-navigation'
import {DrawerActions} from 'react-navigation-drawer'

let navigator

export const setNavigator = (nav) => {
    navigator = nav
}

export const navigate = (routeName, params) => {
    navigator.dispatch(NavigationActions.navigate({
        routeName,
        params
    }))
}

export const drawerOpen = () => {
    navigator.dispatch(DrawerActions.openDrawer())
}