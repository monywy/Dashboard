import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={'${monserrat.className} antialised'}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Desarrollado por Mònica Roque Sànchez
        </footer>
        </body>
    </html>
  );
}
