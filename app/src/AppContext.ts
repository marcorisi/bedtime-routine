import { createContext } from "react";

import { Who } from "./domain";

interface AppUserContextType {
    who: Who;
}

const AppUserContext = createContext<AppUserContextType>({ who: Who.DAD });

export { AppUserContext };
export type { AppUserContextType };
