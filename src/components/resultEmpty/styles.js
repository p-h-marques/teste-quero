import styled from 'styled-components'
import colors from '../../styles/colors'

export const ResultEmptyStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    border-bottom: 2px solid ${colors.graySecondary};
    max-height: 80px;
    min-height: 80px;
    text-align: center;
`
