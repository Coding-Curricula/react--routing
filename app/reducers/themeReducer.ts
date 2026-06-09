export type Theme = 'light' | 'dark';

export interface ThemeState {
    theme: Theme;
}

export type ThemeAction = 
    | { type: 'TOGGLE_THEME' }
    | { type: 'SET_THEME', payload: Theme };

export const initialThemeState: ThemeState = {
    theme: 'dark',
};

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            };
        case 'SET_THEME':
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
}