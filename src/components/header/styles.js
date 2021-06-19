import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const HeaderStyles = styled.header`
    display: flex;
    flex-direction: row;
    height: 80px;
    padding: 16px ${measures.paddingDesktop};
    color: ${colors.bluePrimary};
    font-weight: bold;

    @media (max-width: 1199px){
        padding: 16px ${measures.paddingMobile};
    }

    p.label{
        span{
            display: inline;
        }

        span + span {
            display: none;
        }

        @media (max-width: 991px){
            span{
                display: none;
            }

            span + span {
                display: inline;
            }
        }
    }

    div.infos {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        flex-basis: 0;

        div.info {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 24px;
            padding-right: 24px;
            border-right: 2px solid ${colors.graySecondary};

            @media (max-width: 991px){
                flex-direction: column;
                margin-right: 15px;
                padding-right: 15px;
            }

            p {
                margin-left: 8px;

                @media (max-width: 991px){
                    margin-left: 0px;
                    margin-top: 5px;
                }
            }
        }

        div.whatsapp {
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (max-width: 991px){
                display: none;
            }

            div.number {
                margin-left: 9px;

                p + p {
                    font-size: 13px;
                }
            }
        }
    }

    div.logo {
        flex-grow: 0;
        flex-basis: 0;
        display: flex;

        img {
            height: 48px;
        }
    }

    div.users {
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        div.user{
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (max-width: 991px){
                flex-direction: column-reverse;
                margin-left: 15px;
                padding-left: 15px;
                border-left: 2px solid ${colors.graySecondary};
            }

            p {
                margin-right: 8px;

                @media (max-width: 991px){
                    margin-right: 0px;
                    margin-top: 5px;
                }
            }
        }
    }
`
