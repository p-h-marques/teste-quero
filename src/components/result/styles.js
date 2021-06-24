import styled from 'styled-components'
import colors from '../../styles/colors'

export const ResultStyles = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0px;
    border-bottom: 2px solid ${colors.graySecondary};
    max-height: 80px;
    min-height: 80px;

    @media(max-width: 575px){
        max-height: unset;
        min-height: unset;
    }

    div.checkbox{
        margin-right: 32px;
        flex-grow: 0;
        flex-basis: auto;

        @media(max-width: 575px){
            margin-right: 15px;
        }
    }

    div.logo{
        width: 106px;
        text-align: center;
        margin-right: 33px;
        flex-grow: 0;
        flex-basis: auto;
        flex-shrink: 0;

        @media(max-width: 575px){
            width: 80px;
            margin-right: 28px;
        }

        img{
            max-width: 106px;
            max-height: 60px;

            @media(max-width: 575px){
                max-width: 80px;
            }
        }
    }

    div.content{
        display: flex;
        align-items: center;
        flex-grow: 1;
        flex-basis: auto;
        flex-wrap: no-wrap;

        @media(max-width: 575px){
            flex-direction: column;
            align-items: flex-start;
            flex-wrap: wrap;
        }

        div.infos{
            flex-grow: 1;
            flex-basis: auto;
            flex-shrink: 1;

            @media(max-width: 575px){
                margin-bottom: 28px;
            }

            p.name{
                font-size: 16px;
                line-height: 16px;
                font-weight: bold;
                color: ${colors.bluePrimary};
                margin-bottom: 10px;
            }

            p.level{
                font-size: 13px;
                line-height: 13px;
                font-weight: normal;
            }
        }

        div.price{
            font-size: 16px;
            line-height: 16px;
            text-align: right;
            flex-grow: 0;
            flex-basis: auto;
            flex-shrink: 0;

            @media(max-width: 575px){
                text-align: left;
            }

            p.discount{
                margin-bottom: 10px;

                span{
                    font-weight: bold;
                    color: ${colors.green};
                }
            }

            p.value{
                font-weight: bold;
                color: ${colors.green};
            }
        }
    }

`
