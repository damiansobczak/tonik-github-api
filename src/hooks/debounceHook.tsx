import React, {useEffect, useState} from "react";

export const useDebounceTyping = (searchInput: string) => {
    const [typing, setTyping] = useState<boolean>(false);

    useEffect(() => {
        setTyping(true);
        const delayDebounceFn = setTimeout(() => {
            setTyping(false);
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [searchInput]);

    return { typing };
}