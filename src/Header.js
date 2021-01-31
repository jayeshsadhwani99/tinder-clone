import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize='large' className="header__icon" />
            </IconButton>

            <img className='header__logo' src='https://png2.cleanpng.com/sh/9772310ff2becbf977954c6cc9490575/L0KzQYm3VsE4N6dwkpH0aYP2gLBuTgRqdpVqip91b3fyPbT2jgB2fJZ3Rdtsb372PcXwjvRmel46eqQBMUflc4S5g8g1Ol8ASKg8M0m8RYK8UskzOmQ2SKI7MEixgLBu/kisspng-tinder-logo-computer-icons-tinder-5b2617bc32c842.906339951529223100208.png' alt='' />

            <IconButton>
                <ForumIcon fontSize='large' className="header__icon" />
            </IconButton>

        </div>
    );
}

export default Header;
