import React from 'react';
import {Checkbox} from 'components';
import { navigate, useLocation } from '@reach/router';
import {CategoryFilterItemWrapper} from './styles';
import queryString from 'query-string';

export function CategoryFilterItem({title, id}) {
    const { search } = useLocation();
    const qs = queryString.parse(search);
    const collectionIds = qs.c?.split(',').filter(c => !!c) || [];
    const checked = collectionIds?.find(cId => cId === id);
    const searchTerm = qs.s;




    const onClick = () => {
        let navigateTo = '/all-products';

        return (
            <CategoryFilterItemWrapper onClick={onClick}>
              <Checkbox checked={checked} />
              <div>{title}</div>
            </CategoryFilterItemWrapper>
          );
}