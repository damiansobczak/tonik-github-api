import * as React from "react";

export type Action = {type: 'search/value', payload: string} | {type: 'search/sort', payload: string} | {type: 'search/pagination/increment'} | {type: 'search/pagination/decrement'} | {type: 'search/pagination/show', payload: number}
export type Dispatch = (action: Action) => void
export type State = {search: string, page: number, sort: string, show: number}
export type SearchProviderProps = {children: React.ReactNode}