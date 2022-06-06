import React from 'react';
import { mount as mountMarketing } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

console.log(mountMarketing);

export default () => {
    return (
        <div>
            <h1>Hello there</h1>
            <hr/>
            <MarketingApp />
        </div>
    );
}
