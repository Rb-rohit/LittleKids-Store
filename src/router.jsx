import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext({ pathname: "/", navigate: () => {} });

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname || "/");

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname || "/");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to) => {
    if (to === pathname) return;
    window.history.pushState({}, "", to);
    setPathname(to);
  };

  return <RouterContext.Provider value={{ pathname, navigate }}>{children}</RouterContext.Provider>;
}

export const useNavigate = () => useContext(RouterContext).navigate;
export const useLocation = () => ({ pathname: useContext(RouterContext).pathname });
