import styled from 'styled-components'
import colors from '../../styles/colors'

export const ButtonStyles = styled.button`
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
    padding: 9px 18px;
    height: 100%;
    border-radius: 3px;
    border: 1px solid;
    cursor: pointer;

    &.big{
        padding: 16px 24px;
    }

    &.secondary{
        color: ${colors.bluePrimary};
        border-color: ${colors.bluePrimary};
        background-color: white;

        &:hover{
            background-color: rgba(0, 0, 0, 0.05);
        }
    }

    &.primary{
        color: ${colors.black};
        border-color: ${colors.yellowSecondary};
        background-color: ${colors.yellowPrimary};

        &:hover{
            background-color: ${colors.yellowSecondary};
        }
    }

`
