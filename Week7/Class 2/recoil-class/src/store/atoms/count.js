import { createContext, useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom1",
    default: 0
});

export const evenSelector = selector({
    key: "evenSelector1",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2==0;
    }
});

// Todo creation application with filtering logic
// todos, filter