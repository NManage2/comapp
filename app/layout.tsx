import { Geist_Mono, Oxanium, Merriweather } from "next/font/google"
import "@/app/globals.css" // Alias sécurisé pour structure sans src
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { APP_DESCRIPTION, APP_NAME, APP_SLOGAN } from "@/lib/constants"
import { Metadata } from "next"

// Configuration des polices
const merriweatherHeading = Merriweather({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"], // Recommandé pour les titres
})

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME}. ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      // On injecte les 3 variables CSS ici
      className={cn(
        "antialiased",
        oxanium.variable,
        fontMono.variable,
        merriweatherHeading.variable
      )}
    >
      {/* 
        Le 'font-sans' est déjà défini dans globals.css via @layer base.
        On s'assure juste que le body hérite bien de tout.
      */}
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
