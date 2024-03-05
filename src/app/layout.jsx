import { Rubik, Montserrat, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/context/ThemeProvider';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Toaster } from "@/components/ui/toaster"
import { DataProvider } from '@/components/context/DataProvider';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Nevada Outback Gems',
  description: 'Collection of website links',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <DataProvider>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </DataProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
