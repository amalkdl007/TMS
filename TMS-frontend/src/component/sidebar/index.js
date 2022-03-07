import React from 'react';
import {SidebarContainer,Icon,CloseIcon, SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements';
function Sidebar(props) {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="">Home</SidebarLink>
                    <SidebarLink to="login">Login</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="about">About</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to="/enroll">Enroll</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
}

export default Sidebar;