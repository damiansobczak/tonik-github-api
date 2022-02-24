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
        case 'search/sort': {
            return {...state, sort: action.payload}
        }
        case 'search/pagination/increment': {
            return {...state, page: state.page + 1}
        }
        case 'search/pagination/decrement': {
            return {...state, page: state.page > 0 ? state.page - 1 : state.page}
        }
        case 'search/pagination/show': {
            return {...state, show: action.payload}
        }
        default: {
            return state;
        }
    }
}

function SearchProvider({children}: SearchProviderProps) {
    const [state, dispatch] = React.useReducer(searchReducer, {search: '', page: 1, sort: '', show: 2})
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