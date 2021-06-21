import styled from 'styled-components'
import colors from '../../styles/colors'

export const FooterContactStyles = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0px;

    @media(max-width: 1199px){
        justify-content: center;
        flex-direction: column;
        border-left: 1px solid ${colors.bluePrimary};
        border-right: 1px solid ${colors.bluePrimary};

        &.first{
            grid-column: 1/4;
            flex-direction: row;
            border-bottom: 2px solid ${colors.bluePrimary};

            div.logo{
                margin-right: 17px;
                margin-bottom: 0px;
            }

            div.data p.title,
            div.data p.description{
                display: block;
            }

            div.data p.compact{
                display: none;
            }
        }
    }


    div.logo{
        margin-right: 17px;
        margin-bottom: 0px;

        @media(max-width: 1199px){
            margin-right: 0px;
            margin-bottom: 13px;
        }
    }

    div.data{
        p.title{
            font-size: 19px;
            line-height: 19px;
            margin-bottom: 12px;

            @media(max-width: 1199px){
                display: none;
            }
        }

        p.description {
            font-size: 16px;
            line-height: 16px;
            margin-bottom: 0px;

            @media(max-width: 1199px){
                display: none;
            }
        }

        p.compact{
            display: none;
            font-size: 19px;
            line-height: 19px;

            @media(max-width: 1199px){
                display: block;
            }
        }
    }
`
