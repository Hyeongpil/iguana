import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
    html {
        font-family: 'Noto Sans KR', sans-serif;
        padding-bottom: 100px;
    }
    .mt-60 {
        margin-top: 60px
    }
`

export default GlobalStyle
