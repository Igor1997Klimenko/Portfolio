import { SidebarPortfolio, AvatarImages, Contacts, List, Link, Item, ListProgramm } from "./Sidebar.styles";
import avatar from '../../images/avatar.jpeg';

const Sidebar = () => {
    return (
        <>
            <SidebarPortfolio>
            <AvatarImages src={avatar} alt="avatar" />
                
                <Contacts>contacts</Contacts>

                <List>
                    <Item><Link href="#">+380986795230</Link></Item>
                    <Item><Link href="#">igorek.klimuch.97@gmail.com</Link></Item>
                    <Item><Link href="https://github.com/Igor1997Klimenko">Github</Link></Item>
                    <Item><Link href="#">Odessa, Ukraine</Link></Item>
                </List>

                <Contacts>tech skills</Contacts>

                <ListProgramm>
                    <Item><span>CSS3</span></Item>
                    <Item><span>SASS</span></Item>
                    <Item><span>HTML5</span></Item>
                    <Item><span>WebPack/Gulp</span></Item>
                    <Item><span>JavaScript</span></Item>
                    <Item><span>React</span></Item>
                    <Item><span>Redux</span></Item>
                    <Item><span>Bootstrap</span></Item>
                    <Item><span>Node.js</span></Item>
                    <Item><span>REST API</span></Item>
                    <Item><span>GIT</span></Item>
                </ListProgramm>

                <Contacts>soft skills</Contacts>

                <ListProgramm>
                    <Item><span>Teamwork</span></Item>
                    <Item><span>Communication</span></Item>
                    <Item><span>Decision-making</span></Item>
                </ListProgramm>

                <Contacts>language skills</Contacts>

                <ListProgramm>
                    <Item><span>Ukrainian — native</span></Item>
                    <Item><span>Russian — native</span></Item>
                    <Item><span>English — intermediate</span></Item>
                </ListProgramm>
                
            </SidebarPortfolio>

            
        </>
    )
}

export default Sidebar