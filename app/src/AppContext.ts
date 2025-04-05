import { createContext } from "react";

import { Who } from "./domain";

export const AppUserContext = createContext({ who: Who.DAD });
