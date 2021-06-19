import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const MainStyles = styled.div`
    main{
        margin-top: 36px;
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
    }
`
