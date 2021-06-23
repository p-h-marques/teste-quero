import styled from 'styled-components'
import colors from '../../styles/colors'

export const CardAddStyles = styled.div`
    padding: 40px;
    height: 100%;
    min-height: 420px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.03);
    }

    svg{
        color: ${colors.bluePrimary};
        width: 64px;
        margin-bottom: 40px;
    }

    h2{
        font-size: 19px;
        line-height: 19px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    p{
        font-size: 13px;
        line-height: 20px;
    }
`
