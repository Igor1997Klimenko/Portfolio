import styled from 'styled-components';

export const SidebarPortfolio = styled.div`
  background: #fffabf;
  padding: 40px;
`;

export const AvatarImages = styled.img`
height: auto;
width: 250px;
border-radius: 50%;
display: block;
overflow: hidden;
padding: 60px 0;
margin: auto;
`;

export const Contacts = styled.span`
display: block;
background: #434343;
color: #dfdfdf;
padding: 10px;
text-transform: uppercase;
font-weight: 700;
`;

export const List = styled.ul`
list-style: none;
margin: 0;
padding: 20px 0 20px 15px;
`;

export const Item = styled.li`
padding: 2px 0;
`;

export const Link = styled.a`
text-decoration: none;

  &:hover{
    text-decoration: revert;
  }
`;

export const ListProgramm = styled.ul`
margin: 0;
padding: 20px 0 20px 30px;
`;