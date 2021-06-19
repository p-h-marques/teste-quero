import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeaderStyles = styled.header`
    display: flex;
    flex-direction: row;
    height: 80px;
    padding: 16px 113px;
    color: ${colors.bluePrimary};
    font-weight: bold;

    div.infos {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        flex-basis: 0;

        div.info {
            display: flex;
            flex-direction: row;
            align-items: center;

            p {
                margin-left: 8px;
            }
        }

        div.whatsapp {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 24px;
            padding-left: 24px;
            border-left: 2px solid ${colors.graySecondary};

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

    div.user {
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        /* flex-direction: row-reverse; */
        align-items: center;
        justify-content: flex-end;

        p {
            margin-right: 8px;
        }
    }
`
