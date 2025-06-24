import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const themes = {
        light: {
            primaryColor: '#ffffff',
            secondaryColor: '#5700FF',
            backgroundColor: '#ffffff',
            largeTextcolor: '#333333',
            mediumTextColor: '#4D4D4D',
            smallTextColor: '#808080',
            buttonTextColor: '#ffffff',
            CardColor: '#f7f7f7',
            secondaryHoverColor: '#4500cc',
            borderColor: '#f7f7f7',
            borderColor1: '#f3f4f6'
        },
        light1: {
            primaryColor: '#F7DC6F',
            secondaryColor: '#8E44AD',
            backgroundColor: '#F2F2F2',
            largeTextcolor: '#2C3E50',
            mediumTextColor: '#566573',
            smallTextColor: '#808B96',
            buttonTextColor: '#FFFFFF',
            CardColor: '#FFFFFF',
            secondaryHoverColor: '#7A288A',
            borderColor: '#D7DBDD',
            },
        dark: {
            primaryColor: '#F7DC6F',
            secondaryColor: '#8E44AD',
            backgroundColor: '#F2F2F2',
            largeTextcolor: '#2C3E50',
            mediumTextColor: '#566573',
            smallTextColor: '#808B96',
            buttonTextColor: '#FFFFFF',
            CardColor: '#FFFFFF',
            secondaryHoverColor: '#7A288A',
            borderColor: '#D7DBDD',
        }

        };


    return (
        <ThemeContext.Provider value={{theme, setTheme, themes}}>{children}</ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};


