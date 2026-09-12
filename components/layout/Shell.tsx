"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { GlossaryProvider } from "@/components/accessibility/GlossaryProvider";
import { GlossaryTermLinks } from "@/components/accessibility/GlossaryTermLinks";
import { ServiceWorkerRegistrar } from "@/components/pwa/ServiceWorkerRegistrar";
import { PwaThemeColor } from "@/components/pwa/PwaThemeColor";
import { OnboardingModal } from "@/components/onboarding/OnboardingModal";
import { useI18n } from "@/lib/i18n/provider";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { t } = useI18n();

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:shadow-lg focus:text-white dark:focus:text-slate-900"
      >
        {t.a11y.skipToContent}
      </a>

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

      <main
        id="contenido"
        tabIndex={-1}
        className={cn(
          "pt-16 min-h-screen transition-all duration-300 ease-in-out focus:outline-none",
          sidebarCollapsed ? "lg:pl-[60px]" : "lg:pl-[280px]"
        )}
      >
        {children}
      </main>

      <div className={cn(
        "transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "lg:pl-[60px]" : "lg:pl-[280px]"
      )}>
        <Footer />
      </div>

      <GlossaryProvider>
        <GlossaryTermLinks />
      </GlossaryProvider>

      <ServiceWorkerRegistrar />
      <PwaThemeColor />
      <OnboardingModal />
    </>
  );
}
