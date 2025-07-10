import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    // Initialize theme based on user's system preference or default to 'light'
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    const themes = {
        light: {
            backgroundPrimary: '#FFFFFF', // Main background color (e.g., body)
            backgroundSecondary: '#F3F4F6', // Secondary background (e.g., cards, sections)
            accent: '#6366F1', // Primary accent color (e.g., buttons, highlights) - Indigo-500
            textPrimary: '#1F2937', // Main text color (dark gray) - Gray-900
            textSecondary: '#4B5563', // Secondary text color (medium gray) - Gray-700
            textButton: '#FFFFFF', // Text color on accent buttons
            border: '#E5E7EB', // Border color (light gray) - Gray-200
            hoverAccent: '#4F46E5', // Accent color on hover (darker indigo) - Indigo-600
            iconDefault: '#1F2937', // Default icon color (matches textPrimary)
            shadow: 'rgba(0, 0, 0, 0.1)', // Light theme shadow
            cardHoverBorder: '#6366F1', // Border color on card hover
        },
        dark: {
            backgroundPrimary: '#1F2937', // Main background color (dark gray) - Gray-900
            backgroundSecondary: '#374151', // Secondary background (darker gray) - Gray-700
            accent: '#6366F1', // Primary accent color (same vibrant indigo)
            textPrimary: '#F9FAFB', // Main text color (off-white) - Gray-50
            textSecondary: '#D1D5DB', // Secondary text color (light gray) - Gray-300
            textButton: '#FFFFFF', // Text color on accent buttons
            border: '#4B5563', // Border color (medium dark gray) - Gray-700
            hoverAccent: '#4F46E5', // Accent color on hover (darker indigo)
            iconDefault: '#F9FAFB', // Default icon color (matches textPrimary)
            shadow: 'rgba(255, 255, 255, 0.1)', // Dark theme shadow
            cardHoverBorder: '#6366F1', // Border color on card hover
        }
    };

    return (
        <ThemeContext.Provider value={{theme, setTheme, themes}}>{children}</ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeProvider};
