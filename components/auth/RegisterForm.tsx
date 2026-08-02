"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { useI18n } from "@/lib/i18n/provider";

export function RegisterForm() {
  const { t } = useI18n();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || t.auth.register.errorGeneric);
        setLoading(false);
        return;
      }

      router.push("/auth/login?registered=true");
    } catch {
      setError(t.auth.register.errorCreate);
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <CardTitle>{t.auth.register.title}</CardTitle>
        <CardDescription>
          {t.auth.register.subtitle}
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 rounded-lg bg-error-light border border-error/20 text-sm text-error">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-fg mb-1.5">
            {t.auth.register.name}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.auth.register.namePlaceholder}
              className="w-full h-10 pl-10 pr-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-fg mb-1.5">
            {t.auth.register.email}
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full h-10 pl-10 pr-3 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-fg mb-1.5">
            {t.auth.register.password}
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t.auth.register.passwordPlaceholder}
              required
              minLength={6}
              className="w-full h-10 pl-10 pr-10 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-fg-muted hover:text-fg"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {t.auth.register.submit}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-fg-muted">
          {t.auth.register.hasAccount}{" "}
          <Link href="/auth/login" className="text-primary hover:text-primary-hover font-medium">
            {t.auth.register.loginLink}
          </Link>
        </p>
      </div>
    </Card>
  );
}
