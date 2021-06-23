import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const FooterStyles = styled.footer`
    background-color: ${colors.blueSecondary};
    color: white;

    div.contacts{
        display: flex;
        justify-content: space-between;
        /* grid-template-columns: repeat(4, 1fr); */
        padding: 24px ${measures.paddingDesktop};

        @media(max-width: 1199px){
            padding: 0px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    div.end{
        background-color: ${colors.bluePrimary};
        padding: 53px 0px;
        text-align: center;

        @media(max-width: 1199px){
            padding: 34px 0px;
        }

        p {
            font-size: 13px;
            line-height: 13px;
            font-weight: bold;
        }
    }
`
