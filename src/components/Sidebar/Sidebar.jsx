import { SidebarPortfolio, AvatarImages, Contacts, List, Link, Item, ListProgramm } from "./Sidebar.styles";
import avatar from '../../images/avatar.jpeg';

const Sidebar = () => {
    return (
        <>
            <SidebarPortfolio>
            <AvatarImages src={avatar} alt="avatar" />
                
                <Contacts>contacts</Contacts>

                <List>
                    <Item><Link href="tel:+380986795230">+380986795230</Link></Item>
                    <Item><Link href="mailto:igorek.klimuch.97@gmail.com">igorek.klimuch.97@gmail.com</Link></Item>
                    <Item><Link href="https://github.com/Igor1997Klimenko" target="_blank">Github</Link></Item>
                    <Item><Link href="https://www.google.com/maps/place/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.459972,30.7117875,11z/data=!3m1!4b1!4m5!3m4!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!8m2!3d46.482526!4d30.7233095" target="_blank">Odessa, Ukraine</Link></Item>
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
                    <Item><span>English — in the process of studying</span></Item>
                </ListProgramm>
                
            </SidebarPortfolio>

            
        </>
    )
}

export default Sidebar