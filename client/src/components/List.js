import React from 'react';
import styled from 'styled-components';

const Tag = styled.ul`
    boxSizing: 'border-box',
    margin-top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;

const List = ({ children }) => 
    <Tag>
        { children }
    </Tag>

export default List;