import styled from 'styled-components'

export const ModalActionsStyles = styled.aside`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;

    @media (max-width: 575px) {
        justify-content: center;
    }

    div + div {
        margin-left: 8px;
    }
`
