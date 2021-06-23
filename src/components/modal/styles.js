import styled from 'styled-components'
import colors from '../../styles/colors'

export const ModalStyles = styled.aside`
    position: fixed;
    z-index: 9;
    top: 0px;
    left: 0px;
    background-color: ${colors.overlay};
    width: 100%;
    height: 100vh;
    display: ${props => (props.visible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    padding: 184px 0px;

    div.overflow{
        overflow-y: auto;
        max-height: calc(100vh - 100px);
        max-width: 100vw;
        width: 750px;
    }

    div.container {
        margin-top: 30px;
        background-color: white;
        position: relative;
        padding: 46px 40px 40px 40px;

        div.exit {
            position: absolute;
            top: -30px;
            right: 0px;
            color: white;
            cursor: pointer;
        }

        div.header {
            h1 {
                font-size: 28px;
                line-height: 28px;
                margin-bottom: 14px;
            }
        }

        div.results{
            margin-top: 46px;

            div.order{
                display: flex;
                justify-content: space-between;
                font-weight: bold;
                padding-bottom: 23px;
                border-bottom: 2px solid ${colors.graySecondary};

                div.select{
                    display: flex;
                    align-items: flex-end;

                    @media(max-width: 575px){
                        flex-direction: column;

                        div + div {
                            margin-top: 10px;
                        }
                    }

                    div + div{
                        color: ${colors.bluePrimary};
                        cursor: pointer;

                        svg{
                            margin-left: 9px;
                        }
                    }
                }

            }
        }

        div.actions{
            margin-top: 40px;
            display: flex;
            justify-content: flex-end;
            align-items: stretch;

            @media(max-width: 575px){
                justify-content: center;
            }

            div + div {
                margin-left: 8px;
            }
        }
    }
`
