import styled from "styled-components";

export const Container = styled.span`
    margin-right: 6px;
    padding: 5px 14px;
    border-radius: 5px;
    
    font-size: 12px;
    
    background-color:  ${({theme}) => theme.COLORS.GRAY_300};
    color:  ${({theme}) => theme.COLORS.WHITE};
`;