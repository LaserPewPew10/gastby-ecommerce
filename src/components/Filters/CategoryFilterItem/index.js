import React from 'react';
import {Checkbox} from 'components';
import {CategoryFilterItemWrapper} from './styles';

export function CategoryFilterItem({title}) {
    return (
        <CategoryFilterItemWrapper><div>{title}</div></CategoryFilterItemWrapper>
    )
}