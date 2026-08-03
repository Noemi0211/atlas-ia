"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { SpeechReader } from "@/components/accessibility/SpeechReader";
import { GlossaryProvider } from "@/components/accessibility/GlossaryProvider";
import { GlossaryTermLinks } from "@/components/accessibility/GlossaryTermLinks";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <>
      <Header
        onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        isMobileMenuOpen={mobileMenuOpen}
        sidebarCollapsed={sidebarCollapsed}
        onSidebarToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Sidebar isOpen={true} collapsed={false} onClose={() => setMobileMenuOpen(false)} />
      </MobileDrawer>

      <Sidebar isOpen={true} collapsed={sidebarCollapsed} />

      <main className={cn(
        "pt-16 min-h-screen transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "lg:pl-[60px]" : "lg:pl-[280px]"
      )}>
        {children}
      </main>

      <div className={cn(
        "transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "lg:pl-[60px]" : "lg:pl-[280px]"
      )}>
        <Footer />
      </div>

      <SpeechReader />

      <GlossaryProvider>
        <GlossaryTermLinks />
      </GlossaryProvider>
    </>
  );
}
