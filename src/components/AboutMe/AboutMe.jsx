import { School, ListRespons, TextItem, ListText, Responsibilities, Privatbank, Products, About, FirstName, Develop, Summary, Text, Experience, Contacts, List } from "./AboutMe.styles";
const AboutMe = () => {
    return (
        <>
            <About>
                <FirstName>FIRST NAME LAST NAME</FirstName>
                <Develop>JUNIOR FULL-STACK DEVELOPER</Develop>
                <Summary>SUMMARY</Summary>

                <Text>I am a Junior Front-End developer. I focus on HTML5,
                CSS3, JS, React. English — Intermediate. Looking for a
                remote job. Development, practice and work for the
                result are important for me. I intend to develop
                innovative technologies and deliver value to people.</Text>
            </About>

            <Experience>
            <Contacts>projects</Contacts>

            <List>
                <li>
                    <a href="">Filmoteka</a>
                    <p>Project about searching movies, and adding favorite movies
                    to a client personal library. Using pure JS, npm-packages and
                    SCSS</p>
                </li>

                <li>
                    <a href="">Platano Fest</a>
                    <p>Music festival site. Using React, SCSS</p>
                </li>

                <li>
                    <a href="">IceCream</a>
                    <p>Ice Cream company site. Neat and tasty design, responsible
l                   ayout. Using Parcel, SCSS, JS</p>
                </li>
            </List>

            <Contacts>WORK EXPERIENCE</Contacts>

            <Products>Call center operator for the sale of banking products</Products>

            <Privatbank>JSC CB "PRIVATBANK" | 2018 - present</Privatbank>

            <Responsibilities>Responsibilities:</Responsibilities>

            <ListText>
                <li>
                    <TextItem>
                    ● opened credit cards, deposits, cash loans to clients on
                    cold and warm bases
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● advised on banking services and products
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● developed reports on the work performed 100% on time
                    </TextItem>
                </li>
            </ListText>

            <Responsibilities>Responsibilities:</Responsibilities>
            <ListRespons>
                <li>
                    <TextItem>
                    ● has attracted over 500 new clients
                    </TextItem>
                </li>

                <li>
                    <TextItem>
                    ● twice became the best KPI manager
                    </TextItem>
                </li>
            </ListRespons>

            <Contacts>EDUCATION</Contacts>

            <Products>Kyiv National University of Construction and</Products>
            <TextItem>Architecture |2013-2018</TextItem>
            <TextItem>Master | Economics of enterprise</TextItem>

        <School>
            <Contacts>ADDITIONAL EDUCATION</Contacts>
            <Products>IT School GoIT</Products>
            <TextItem>Full stack developer</TextItem>
            <TextItem>July 2020 - July 2021 |Ukraine</TextItem>
        </School>
            </Experience>
        </>
    )
}

export default AboutMe;