import React from "react";
import { delay, motion } from "framer-motion";
import { StyledNav, NavMarginAuto, StyledLogoImg, StyledNavLink, BtnDarkBlue } from "../styles/object/objectDiv";
import logoImg from '../images/logo.png'
import { menuM } from "../config";

export const Nav = () => {
    return <StyledNav>
        <NavMarginAuto>
            <motion.div
                initial={{ opacity: 0, y: 0, x: 0, width: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0, width: 250 }}
                transition={{ duration: .5 }}
            >
                <StyledLogoImg src={logoImg} />
            </motion.div>
            <StyledNavLink>
                {
                    menuM.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -10, x: 0, }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: index - .6, duration: .6 }}
                            >
                                <a to={item.url}>
                                    {item.name}
                                </a>
                            </motion.div>
                        )
                    })
                }
            </StyledNavLink>
            <BtnDarkBlue>Get Started</BtnDarkBlue>
        </NavMarginAuto >
    </StyledNav >
}
