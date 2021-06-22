import styled from 'styled-components'
import colors from '../../styles/colors'

export const SelectStyles = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-size: 13px;
        line-height: 13px;
        font-weight: bold;
        margin-bottom: 6px;
    }

    select{
        padding: 16px;
        border-radius: 3px;
        border: 1px solid ${colors.grayOutline};
        font-size: 16px;
        line-height: 16px;
    }
`
