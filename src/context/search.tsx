import * as React from 'react';
import { Action, Dispatch, State, SearchProviderProps} from "../types/searchContextTypes";

const SearchStateContext = React.createContext<
    {state: State; dispatch: Dispatch} | undefined
    >(undefined)

function searchReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'search/value': {
            return {...state, search: action.payload}
        }
        default: {
            return state;
        }
    }
}

function SearchProvider({children}: SearchProviderProps) {
    const [state, dispatch] = React.useReducer(searchReducer, {search: ''})
    const value = {state, dispatch}
    return (
        <SearchStateContext.Provider value={value}>
            {children}
            </SearchStateContext.Provider>
    )
}

function useSearch() {
    const context = React.useContext(SearchStateContext)
    if (context === undefined) {
        throw new Error('useSearch must be used within a SearchProvider')
    }
    return context
}

export {SearchProvider, useSearch}