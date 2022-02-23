import * as React from "react";

export type Action = {type: 'search/value', payload: string}
export type Dispatch = (action: Action) => void
export type State = {search: string}
export type SearchProviderProps = {children: React.ReactNode}