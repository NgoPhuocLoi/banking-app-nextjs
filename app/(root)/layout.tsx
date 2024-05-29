import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Lois", lastName: "Ngo" };

  return (
    <main className="h-screen w-full flex font-inter">
      <Sidebar user={null} /> {children}
    </main>
  );
}
