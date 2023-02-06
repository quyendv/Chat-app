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
                conversationBody: '#e1d8d3',
                senderMsg: '#dcf8c6',
                receiverMsg: 'whitesmoke',
                inputMsg: '#f2f2f2',
            },
            spacing: {
                headerHeight: '3.75rem', // h-15 <-> 60px
                // conversationBody: 'calc(100% - 3.75rem)', // remaining, abstract headerHeight -> update: còn input bên dưới nữa, nên dùng flex luôn
            },
        },
        fontFamily: {
            berkshireSwash: ['Berkshire Swash', 'cursive'],
            lobster: ['Lobster', 'cursive'],
        },
    },
    plugins: [],
};
