import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const BreadcrumbsStyles = styled.div`
    padding: 0px ${measures.paddingDesktop};
    margin-top: 29px;
    font-size: 13px;
    line-height: 13px;
    color: ${colors.bluePrimary};
    display: flex;

    svg{
        display: none;

        @media(max-width: 767px){
            display: block;
            margin-right: 10px;
        }
    }

    @media(max-width: 1199px){
        padding: 0px ${measures.paddingMobile};
    }

    span.link{
        color: ${colors.bluePrimary};
        font-weight: bold;

        @media(max-width: 767px){
            display: none;
        }

        &.active{
            color: ${colors.black};
            font-weight: normal;
        }

        &.previous{
            @media(max-width: 767px){
                display: inline;
            }
        }
    }

    span.separator{
        margin: 0px 9px;
        color: ${colors.black};

        @media(max-width: 767px){
            display: none;
        }
    }
`