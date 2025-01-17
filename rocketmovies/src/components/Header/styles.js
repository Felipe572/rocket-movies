import styled from 'styled-components';

export const Container = styled.header`

  grid-area: header;

  height: 105px;
  width: 100%;
  padding: 0 80px;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};



.logo h1 {
  font-size: 1.8rem;
  color: #ff6363;
}

.search-bar input {
  flex: 1;
  width: 300px;
  padding: 8px 10px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
}

.search-bar input::placeholder {
  color: #aaa;
}

`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
  }

  .logout {
  background: none;
  border: none;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  cursor: pointer;
  font-size: 0.9rem;
  text-align: end;
}
`;