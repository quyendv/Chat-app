/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                auth: 'url("src/assets/images/bg-auth-01.png")',
                authOverlay: 'linear-gradient(to right, #FF4B2B, #FF416C)',
            },
            colors: {
                facebook: '#1878f3',
                google: '#e72734',
                linkedin: '#3b5998',
            },
        },
        fontFamily: {
            berkshireSwash: ['Berkshire Swash', 'cursive'],
            lobster: ['Lobster', 'cursive'],
        },
    },
    plugins: [],
};
