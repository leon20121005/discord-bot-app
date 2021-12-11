import React from 'react';
import Metric from '../components/Metric';
import Metric2 from '../components/Metric2';
import Metric3 from '../components/Metric3';
import Metric4 from '../components/Metric4';

import '../Overview.scss';

function Overview() {
    return (
        <div className="Overview">
            <div className="grid-upper">
                <Metric />
                <Metric2 />
            </div>
            <div className="grid-lower">
                <Metric3 />
                <Metric4 />
            </div>
        </div>
    );
}

export default Overview;
