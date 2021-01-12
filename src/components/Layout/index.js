import React from 'react';
import {LayoutWrapper} from './styles';
import {header} from '../Header';

const Layout = ({children}) => {
    return (
        <>
        <Header />
        <LayoutWrapper>
            <main>{children}</main>
        </LayoutWrapper>
        </>
    );
};

export {Layout};
