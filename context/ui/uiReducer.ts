import { UIStateProps } from './UIProvider';

type UIActionTypes = 
    |{type: 'UI - Open Sidebar';}
    |{type: 'UI - Close Sidebar';}

export const uiReducer = ( state: UIStateProps, action: UIActionTypes ): UIStateProps => {

    switch (action.type) {
        case 'UI - Open Sidebar':
            return {
                ...state,
                sideMenuOpen: true,
            }

        case 'UI - Close Sidebar':
            return {
                ...state,
                sideMenuOpen: false,
            }
        
        default:
            return state;
    }
}