import styled from 'styled-components';

export const Container = styled.button`
   width: 100%;
   height: 56px;
   
   padding: 0 16px;
   margin-top: 24px;
   
   border: 0;
   border-radius: 10px;

   font-weight: 500;

   background-color: ${({theme}) => theme.COLORS.PINK};
   color: ${({theme}) => theme.COLORS.BACKGROUND_800};

   &:disabled {
    opacity: 0.5;
   }
`;