import React, { Component } from 'react';
import styled from 'styled-components';

const Tag = styled.button`
    cursor: pointer;
    color: #007bff;
    background-color: transparent;
    background-image: none;
    border-color: #007bff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5);
    }
`;

class Button extends Component {
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

export default Button;