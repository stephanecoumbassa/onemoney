import type { ReactNode, PropsWithChildren } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import App from "./App";

type Props = PropsWithChildren<{
    start?: number
}>

function PrivateRoute({ children }: Props): JSX.Element {
    const authed = false // isauth() returns true or false based on localStorage
    return authed ? children : <Navigate to="/test" />;
}

type ProtectedRouteProps = {
    isAuthenticated?: boolean;
    authenticationPath?: string;
    outlet?: JSX.Element;
};

function ProtectedRoute({ isAuthenticated, authenticationPath, outlet }: ProtectedRouteProps) {
    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route path="/hello" element={<App />} />
                <Route path="/hello1" element={<ProtectedRoute authenticationPath='' isAuthenticated={true} outlet={<App/>} /> } />
            </Route>
            <Route path="/test" element={<><h1>test</h1></>} />
            <Route path="/hello2" element={<PrivateRoute><App /></PrivateRoute>} />

        </>
    )
);

export default router;