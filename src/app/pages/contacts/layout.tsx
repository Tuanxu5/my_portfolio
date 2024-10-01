import type { Metadata } from "next"
import Head from "next/head"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  icons: "http://localhost:3000/_next/static/media/icon_logo_project.7faf818f.svg"
}

export default function ContactsPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../images/icons/favicon.ico" />
      </Head>
      <body>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></Script>
        <Script src="https://unpkg.co/gsap@3/dist/gsap.min.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
