import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button, textarea {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }

    body {
      line-height: 1.4;
      font-family: 'Roboto', sans-serif;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    textarea {
      font-family: 'Roboto', sans-serif;
      resize: vertical;
    }   

    ol, ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    body {
      background: ${theme.backBlack};
      color: ${theme.white};
      font-variant-ligatures: none;
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
      text-decoration-skip-ink: auto;
    }
    
    header {
      background: ${theme.white};
      padding: ${theme.spacing.rem(40)};

      & h1 {
        color: ${theme.backBlack};
      }
    }

    main {
      height: 100vh;      
    }

    a {
      text-decoration: none;
      color: ${theme.black};
    }

    p a,
    li a {
      color: ${theme.black};
      border-bottom: 2px solid ${theme.primary};
      transition: all 0.1s;
    }

    a:hover,
    a:focus {
      text-decoration: none;
      border-bottom: none;      
      color: ${theme.primary};
    }

    li {
      list-style-type: none;
    }

    *::selection {
      color: ${theme.primary};
      background: ${theme.backBlack};
    }    
    
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: ${theme.whitesmoke};
    }
    
    ::-webkit-scrollbar-thumb {
      background: ${theme.black};
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.gray};
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6, {      
      border: none;
      font-weight: 700;
      z-index: 1;
      line-height: 1.2;
      text-align: center;
    }

    h1 {
      font-size: ${theme.spacing.rem(90)};      

      ${theme.media.mobile(css`
        font-size: ${theme.spacing.rem(80)};
      `)}

      ${theme.media.phone(css`
        font-size: ${theme.spacing.rem(40)};
      `)}
    }

    h2 {
      font-size: ${theme.spacing.rem(80)};

      ${theme.media.mobile(css`
        font-size: ${theme.spacing.rem(70)};
      `)}

      ${theme.media.phone(css`
        font-size: ${theme.spacing.rem(37)};
      `)}
    }

    h3 {
      font-size: ${theme.spacing.rem(70)};

      ${theme.media.mobile(css`
        font-size: ${theme.spacing.rem(60)};
      `)}

      ${theme.media.phone(css`
        font-size: ${theme.spacing.rem(34)};
      `)}
    }

    h4 {
      font-size: ${theme.spacing.rem(60)};

      ${theme.media.mobile(css`
        font-size: ${theme.spacing.rem(50)};
      `)}

      ${theme.media.phone(css`
        font-size: ${theme.spacing.rem(31)};
      `)}
    }

    h5 {
      font-size: ${theme.spacing.rem(50)};

      ${theme.media.mobile(css`
        font-size: ${theme.spacing.rem(40)};
      `)}

      ${theme.media.phone(css`
        font-size: ${theme.spacing.rem(28)};
      `)}
    }

    h6 {
      font-size: ${theme.spacing.rem(40)};

      ${theme.media.mobile(css`
        font-size: ${theme.spacing.rem(30)};
      `)}

      ${theme.media.phone(css`
        font-size: ${theme.spacing.rem(25)};
      `)}
    }

    p {      
      font-size: ${theme.spacing.rem(20)};
    }
  `,
)
