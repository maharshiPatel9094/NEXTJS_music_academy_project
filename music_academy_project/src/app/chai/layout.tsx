export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <h2>this is inner layout item</h2>
  {children}
   </>
  );
}
