import { ReactNode } from "react";

import { Header } from "@/components/molecules/header";
import { Sidebar } from "@/components/molecules/sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const currentUser = {
    username: "admin",
    userId: "admin_001",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentUser={currentUser} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
