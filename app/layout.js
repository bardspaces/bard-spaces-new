'use client'
import './globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import CustomCursor from '../components/CustomCursor.js'
import SmoothScroll from '../components/SmoothScroll.js'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Bard Spaces — Luxury Interior Design, New Delhi</title>
        <meta name="description" content="Bard Spaces is a luxury interior design studio based in New Delhi, crafting residential and hospitality spaces that balance architecture, material, and light." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
