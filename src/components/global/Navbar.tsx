import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 2em 3em;
    position: sticky;
    top: 0;
`;

const BrandName = styled(Link)`
    font-weight: 700;
    font-size: 1.8rem;
`;

const NavList = styled.ul`
    display: flex;
    gap: 2.5em;
    list-style: none;
`;

const NavItem = styled.li`
    font-size: 1.2rem;
    font-weight: 500;
`;

const Navbar = () => {
    return (<StyledNav>
        <BrandName href="/">FinPocket</BrandName>
        <NavList>
            <NavItem>Home</NavItem>
            <NavItem>Inspiration</NavItem>
            <NavItem>Courses</NavItem>
            <NavItem>Blog</NavItem>
        </NavList>
    </StyledNav>);
};

export default Navbar;