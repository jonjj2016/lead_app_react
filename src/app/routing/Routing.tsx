import React, {lazy, RC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {Spin} from "antd";
import BaseLayout from '@app/layout/components/BaseLayout';

const LeadsPage = lazy(() => import("@pages/leads/LeadsPage"))

const Routing:RC = () => {
    return (
        <Suspense fallback={<Spin size="large"/>}>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<LeadsPage/>} />
                </Route>
                <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
        </Suspense>
    );
};


export default Routing;