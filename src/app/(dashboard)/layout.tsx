
import Image from "next/image";
import Link from "next/link";
import Menu from "../component/Menu";
import Navbar from "../component/Navbar";


export default function DashboardLayout({children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
          <Link href="/" className="flex justify-center items-center gap-2 p-4">
           <Image src="/logo.webp" alt="logo" height={32} width={32}/>
            <span className="hidden lg:block font-semibold">SchooLama</span>
          </Link>
          <Menu/>
        </div>
        
        {/* RIGHT */}
        <div className="w-[86%] md:w-[82%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
          <Navbar/>
          {children}
        </div>
    </div>
  );
}