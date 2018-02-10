import React, { Component } from 'react';
import styled from 'styled-components';

const Tag = styled.li`
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    cursor: pointer;
    &:hover {
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
    }
    &:active {
        color: #212529;
        background-color: #e9ecef;
    }
`;

class ListItem extends Component {
    render() {
        let {
            children,
            ...attributes
        } = this.props;
        return (
            <Tag {...attributes}>{children}</Tag>
        )
    }
}

export default ListItem;