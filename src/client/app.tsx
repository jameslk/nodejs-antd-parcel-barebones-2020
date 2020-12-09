import React from 'react';
import {Button} from 'antd';

import './style.less';

interface IApp {}

const App: React.FC<IApp> = () => {
    return (
        <>
            <p className={'foo'}>Hi!</p>
            <Button type="primary" href={'https://ant.design/index-cn'}>
                Antd Docs
            </Button>
            &nbsp;
            <Button type="primary" href={'https://parceljs.org/'}>
                Parcel Docs
            </Button>
        </>
    );
};

export default App;
