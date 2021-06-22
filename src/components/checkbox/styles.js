import styled from 'styled-components'
import colors from '../../styles/colors'

export const CheckboxStyles = styled.div`
    display: flex;
    align-items: center;

    & + div {
        margin-left: 26px;
    }

    input {
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: 0;
        border: 1px solid ${colors.bluePrimary};
        height: 16px;
        width: 16px;
        margin-right: 8px;
        border-radius: 3px;

        &:checked {
            background: ${colors.bluePrimary};
        }

        &:after {
            content: '';
            position: relative;
            left: 40%;
            top: 20%;
            width: 15%;
            height: 40%;
            border: solid #fff;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            display: none;
        }

        &:checked:after {
            display: block;
        }
    }

    label {
        font-size: 16px;
        line-height: 16px;
    }
`
