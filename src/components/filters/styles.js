import styled from 'styled-components'
import colors from '../../styles/colors'
import measures from '../../styles/measures'

export const FiltersStyles = styled.div`
    padding: 0px ${measures.paddingDesktop};
    margin-top: 47px;
    display: flex;
    font-weight: bold;
    color: ${colors.bluePrimary};

    @media(max-width: 1199px){
        padding: 0px ${measures.paddingMobile};
        margin-top: 39px;
        flex-direction: column;
        text-align: center;
    }

    div{
        padding: 9px 24px;
        border: 1px solid ${colors.bluePrimary};
        cursor: pointer;

        &:hover{
            background-color: ${colors.bluePrimary};
            color: white;
        }
    }

    div:first-child{
        border-radius: 3px 0px 0px 3px;

        @media(max-width: 1199px){
            border-radius: 3px 3px 0px 0px;
        }
    }

    div:last-child{
        border-radius: 0px 3px 3px 0px;

        @media(max-width: 1199px){
            border-radius: 0px 0px 3px 3px;
        }
    }

    div.selected{
        background-color: ${colors.bluePrimary};
        color: white;
    }
`
