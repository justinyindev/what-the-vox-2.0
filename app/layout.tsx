import Blob from "@/components/Blob/Blob";
import NavBar from "@/components/NavBar/NavBar";
import "./global.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Blob />
        {children}
      </body>
    </html>
  );
}
