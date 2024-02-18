import React from "react"
// import Navbar from "./components/navigation/navbar"
import Link from "next/link"

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <main>{children}</main>
      {/* <Navbar children={undefined} /> */}
      <h1>Root Layout</h1>
    </html>
  )
}



