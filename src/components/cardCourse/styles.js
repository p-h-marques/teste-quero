import styled from 'styled-components'
import colors from '../../styles/colors'

export const CardCourseStyles = styled.div`
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);

    div.infos{
        padding-bottom: 16px;
        margin-bottom: 21px;
        border-bottom: 2px solid ${colors.graySecondary};
        align-self: stretch;
        flex-grow: 0;
        flex-basis: 0;

        div.img{
            height: 70px;
            margin-bottom: 20px;

            img{
                max-height: 70px;
                max-width: 100%;
            }
        }


        div.name{
            font-size: 13px;
            line-height: 13px;
            font-weight: bold;
            margin-bottom: 12px;
            letter-spacing: 0.1em;
        }

        div.course{
            color: ${colors.bluePrimary};
            font-size: 16px;
            line-height: 16px;
            font-weight: bold;
            margin-bottom: 18px;
        }

        div.rating {
            font-size: 16px;
            line-height: 16px;
            font-weight: bold;
            display: flex;
            justify-content: center;

            span.number {
                margin-right: 10px;
            }
        }
    }

    div.description{
        font-size: 13px;
        line-height: 13px;
        padding-bottom: 22px;
        margin-bottom: 21px;
        border-bottom: 2px solid ${colors.graySecondary};
        align-self: stretch;
        flex-grow: 0;
        flex-basis: 0;

        div.shift{
            letter-spacing: 0.1em;
            font-weight: bold;
            margin-bottom: 19px;
        }
    }

    div.price{
        flex-grow: 1;
        flex-basis: 0;

        div.label{
            font-size: 13px;
            line-height: 13px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        div.fullprice{
            text-decoration: line-through;
            margin-bottom: 10px;
            font-size: 13px;
            line-height: 13px;
        }

        div.discountprice{
            margin-bottom: 20px;

            span.value{
                font-size: 19px;
                line-height: 19px;
                font-weight: bold;
                color: ${colors.green};
                margin-right: 5px;
            }

            span.period{
                font-size: 13px;
                line-height: 13px;
            }
        }
    }

    div.disabled{
        flex-grow: 1;
        flex-basis: 0;

        div.status{
            font-size: 13px;
            line-height: 13px;
            font-weight: bold;
            margin-bottom: 15px;
        }

        div.fullprice{
            font-size: 13px;
            line-height: 20px;
            font-weight: regular;
            margin-bottom: 20px;
        }
    }

    div.actions{
        flex-grow: 0;
        flex-basis: 0;

        button + button {
            margin-left: 8px;
        }
    }
`
