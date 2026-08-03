import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import ThemeProvider from '@/components/theme-provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harvey Marshall',
  description:
    'Harvey Marshall - Data Engineer building reliable pipelines, models, and full-stack applications.',
  openGraph: {
    title: 'Harvey Marshall',
    description:
      'Harvey Marshall - Data Engineer building reliable pipelines, models, and full-stack applications.',
    type: 'profile',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html suppressHydrationWarning lang="en">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-foreground mx-auto w-[1100px] max-w-full px-5 pt-28 pb-10">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
