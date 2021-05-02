import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
    html {
        font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    }
    .mt-60 {
        margin-top: 60px
    }
    .ml-30 {
        margin-left: 30px;
    }
`

export default GlobalStyle
