import {mount} from 'marketing/MarketingApp';
import React, {useEffect, useRef} from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => { // egyszer fog csak megfutni komponens létrehozásakor
        mount(ref.current);
    });

    return <div ref={ref}/>;
}
