import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const MainStyles = styled.div`
    main{
        margin-top: 36px;
        margin-bottom: 120px;
        color: ${colors.black};
        padding: 0px ${measures.paddingDesktop};

        @media(max-width:1199px){
            padding: 0px ${measures.paddingMobile};
        }

        h1{
            font-size: 40px;
            line-height: 40px;
            font-weight: bold;
            margin-bottom: 26px;

            @media(max-width: 767px){
                font-size: 33px;
            }
        }

        p {
            line-height: 24px;
        }

        div.cards{
            margin-top: 40px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;

            @media(max-width: 1399px){
                grid-template-columns: repeat(3, 1fr);
            }

            @media(max-width: 991px){
                grid-template-columns: repeat(2, 1fr);
            }

            @media(max-width: 767px){
                grid-template-columns: 1fr;
            }
        }
    }
`
