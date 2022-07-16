/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{
          variant: `buttons.toggle`,
          fontWeight: `semibold`,
          display: `block`,
          mx: `auto`,
          mb: 3,
        }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <p>Made with ❤️ in Berlin.</p>
      <p>
        <span>Developed with</span>
        <Link aria-label="Gatsby" sx={{ ml: 2 }} href="https://www.gatsbyjs.com/">
          Gatsby
        </Link>
        <span> using the awesome</span>
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Cara Theme
        </Link>
        <span> by </span>
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
        >
          LekoArts
        </Link>
        <span>.</span>
      </p>
    </Box>
  )
}

export default Footer
