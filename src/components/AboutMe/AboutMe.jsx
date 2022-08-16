import { Advance, School, ListRespons, TextItem, Responsibilities, Products, About, FirstName, Develop, Summary, Text, Experience, Contacts, List, Link } from "./AboutMe.styles";
const AboutMe = () => {
    return (
        <>
            <About>
                <FirstName>My name is Klimenko Igor</FirstName>
                <Develop>JUNIOR FULL-STACK DEVELOPER</Develop>
                <Summary>SUMMARY</Summary>

                <Text>I am a Junior Full-Stack developer. I focus on HTML5,
                CSS3, JS, React, Node.js. Looking for a
                remote job. Development, practice and work for the
                result are important for me. I intend to develop
                innovative technologies and deliver value to people.</Text>
            </About>

            <Experience>
            <Contacts>projects</Contacts>

            <List>
                <li>
                    <Link href="https://popingalov.github.io/filmoteka-dementors-group/" target="blank">Filmoteka</Link>
                    <p>Project about searching movies, and adding favorite movies
                    to a client personal library. Using pure JS, npm-packages and
                    SCSS</p>
                </li>

                <li>
                    <Link href="">Platano Fest</Link>
                    <p>Music festival site. Using React, SCSS</p>
                </li>

                <li>
                    <Link href="https://hrendzha.github.io/brainshtorming_team-project_ice-cream/" target="blank">IceCream</Link>
                    <p>Ice Cream company site. Neat and tasty design, responsible
l                   ayout. Using Parcel, SCSS, JS</p>
                </li>

                <li>
                    <Link href="https://igor1997klimenko.github.io/DEMUR-COM-UA/" target="blank">DEMUR</Link>
                    <p>online shoe store</p>
                </li>
            </List>

            <Contacts>WORK EXPERIENCE</Contacts>

            <Products>salesman-consultant mobile electronics and accessories</Products>

            <Responsibilities>Responsibilities:</Responsibilities>

            <ListRespons>
                <li>
                    <TextItem>
                    ● communication and ordering goods from suppliers
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● maintain the order and brand of the store
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● quality sale of mobile equipment and accessories of different brands
                    </TextItem>
                </li>

            </ListRespons>

            <Products>front-end developer in company Fourmeta</Products>

            <Responsibilities>Responsibilities:</Responsibilities>

            <ListRespons>
                <li>
                    <TextItem>
                    ● also had office manager privilege
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● website and application development
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● worked a bit with the platform Shopify, WordPress
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● worked a lot with layout, adaptive layout for all devices
                    </TextItem>
                </li>
            </ListRespons>

        <School>
            <Contacts>EDUCATION</Contacts>
            <Products>IT School GoIT</Products>
            <TextItem>Full stack developer</TextItem>
            <TextItem>July 2021 - July 2022 |Ukraine</TextItem>
        </School>

        <Advance>I am ready to advance and study to the fullest, just give me such an opportunity please!!!</Advance>
            </Experience>
        </>
    )
}

export default AboutMe;