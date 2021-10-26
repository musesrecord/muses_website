import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from "@styles/components/Layout.module.scss"; // Styles
import DiscordLogo from '../public/icons/discord';
import EtherscanLogo from '../public/icons/etherscan';
import OpenseaLogo from '../public/icons/opensea';
import TwitterLogo from '../public/icons/twitter';


export  const Navigation = ()=> {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Container>
            <Navbar.Brand className={styles.header__logo}  href="/">mu::ses</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className={styles.header__links} target="_blank"
                    href="https://colab.research.google.com/drive/1mAeuoHXgZZ6CdY7rEBIOAmkZIjdjDkSP?usp=sharing">
                    Download a Muse in MIDI</Nav.Link>
                <Nav.Link className={styles.header__links} href="/faq">FAQ</Nav.Link>
                <Nav.Link className={styles.header__links} target="_blank"
                    href="https://polygonscan.com/address/0xc04c14981019045f6e316d21092a1785036af0bd#code">
                    Contract</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link target="_blank" href="https://twitter.com/muses____">
                    <TwitterLogo />
                    </Nav.Link>
                    <Nav.Link target="_blank" href="https://discord.gg/uXtJKHzqHY">
                    <DiscordLogo />
                    </Nav.Link>
                    <Nav.Link target="_blank" href="https://opensea.io/collection/muses-music">
                    <OpenseaLogo />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}
