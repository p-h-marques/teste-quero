import styled from 'styled-components'
import colors from '../../styles/colors'
// import measures from '../../styles/measures'

export const ModalStyles = styled.aside`
    position: fixed;
    z-index: 9;
    top: 0px;
    left: 0px;
    background-color: ${colors.overlay};
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 184px 0px;

    div.container {
        width: 750px;
        background-color: white;
        padding: 46px 40px 40px 40px;
        position: relative;

        div.exit {
            position: absolute;
            top: -30px;
            right: 0px;
            color: white;
        }

        div.header {
            h1 {
                font-size: 28px;
                line-height: 28px;
                margin-bottom: 14px;
            }
        }

        div.filters {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 16px;
            row-gap: 26px;

            @media(max-width: 767px){
                grid-template-columns: 1fr;
                row-gap: 29px;
            }

            div.options {
                p {
                    font-size: 13px;
                    line-height: 13px;
                    font-weight: bold;
                    margin-bottom: 25px;
                }

                div.inputs {
                    display: flex;
                }
            }

            div.slider {
                p {
                    font-size: 13px;
                    line-height: 13px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                p.value {
                    font-weight: normal;
                    margin-bottom: 15px;
                }

                input[type='range'] {
                    height: 36px;
                    -webkit-appearance: none;
                    width: 100%;
                }

                input[type='range']:focus {
                    outline: none;
                }

                input[type='range']::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: ${colors.bluePrimary};
                    border-radius: 2px;
                }

                input[type='range']::-webkit-slider-thumb {
                    border: 2px solid ${colors.bluePrimary};
                    height: 28px;
                    width: 28px;
                    border-radius: 14px;
                    background: white;
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -13px;
                }

                input[type='range']:focus::-webkit-slider-runnable-track {
                    background: ${colors.bluePrimary};
                }

                input[type='range']::-moz-range-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: ${colors.bluePrimary};
                    border-radius: 2px;
                }

                input[type='range']::-moz-range-thumb {
                    border: 2px solid ${colors.bluePrimary};
                    height: 28px;
                    width: 28px;
                    border-radius: 14px;
                    background: white;
                    cursor: pointer;
                }

                input[type='range']::-ms-track {
                    width: 100%;
                    height: 4px;
                    cursor: pointer;
                    animate: 0.2s;
                    background: transparent;
                    border-color: transparent;
                    color: transparent;
                }

                input[type='range']::-ms-fill-lower {
                    background: ${colors.bluePrimary};
                    border-radius: 4px;
                }

                input[type='range']::-ms-fill-upper {
                    background: ${colors.bluePrimary};
                    border-radius: 4px;
                }

                input[type='range']::-ms-thumb {
                    margin-top: 1px;
                    border: 2px solid ${colors.bluePrimary};
                    height: 28px;
                    width: 28px;
                    border-radius: 14px;
                    background: white;
                    cursor: pointer;
                }

                input[type='range']:focus::-ms-fill-lower {
                    background: ${colors.bluePrimary};
                }

                input[type='range']:focus::-ms-fill-upper {
                    background: ${colors.bluePrimary};
                }
            }
        }
    }
`
