import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const NavbarStyles = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: 0px ${measures.paddingDesktop};
    height: 40px;
    background-color: ${colors.bluePrimary};
    color: white;
    font-weight: bold;
    letter-spacing: 0.03em;
    position: relative;

    @media (max-width: 1199px) {
        padding: 0px ${measures.paddingMobile};
    }

    @media (max-width: 767px) {
        justify-content: space-between;
    }

    div.title {
        padding-right: 25px;
        display: flex;
        align-items: center;
        font-size: 19px;

        @media (max-width: 1199px) {
            font-size: 16px;
        }
    }

    div.dropdown {
        display: none;
        cursor: pointer;

        @media (max-width: 767px) {
            display: flex;
            align-items: center;

            span {
                margin-right: 10px;
            }
        }
    }

    div.links {
        display: flex;
        flex-direction: row;

        @media (max-width: 767px) {
            display: ${props => (props.isMenuExpanded ? 'flex' : 'none')};
            position: absolute;
            right: 0px;
            top: 40px;
            background-color: ${colors.bluePrimary};
            flex-direction: column;
        }

        div.link {
            padding: 0px 25px;
            display: flex;
            align-items: center;

            @media (max-width: 767px) {
                padding: 10px 25px;
            }

            &.selected,
            &:hover {
                background-color: ${colors.blueSecondary};
                cursor: pointer;
            }
        }
    }
`
