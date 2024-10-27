import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-full">
            <Link href='/'>
                <Button className="m-4">
                    Home
                </Button>
            </Link>
            <div className="m-auto">
                {children}
            </div>
        </div>
    );
}
