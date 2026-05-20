'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { signInWithPassword, signInWithGoogle, sendMagicLink } from '@/lib/auth/actions';

function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get('next') ?? '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await signInWithPassword(email, password);
    if (result?.error) setError(result.error);
    setLoading(false);
  }

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await sendMagicLink(email);
    if (result?.error) setError(result.error);
    if (result?.success) setMessage(result.success);
    setLoading(false);
  }

  async function handleGoogle() {
    setLoading(true);
    setError(null);
    const result = await signInWithGoogle();
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="card" style={{ borderRadius: 'var(--radius-2xl)' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', color: 'var(--ink)' }}>
        Sign in
      </h1>

      {error && (
        <p style={{ color: '#c0392b', fontSize: '13px', marginBottom: '16px' }}>{error}</p>
      )}
      {message && (
        <p style={{ color: 'var(--sage)', fontSize: '13px', marginBottom: '16px' }}>{message}</p>
      )}

      <form onSubmit={handleEmailLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" disabled={loading} className="btn-dark" style={{ width: '100%' }}>
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>

      <div style={{ display: 'flex', gap: '8px', margin: '12px 0' }}>
        <button onClick={handleGoogle} disabled={loading} style={{ ...secondaryBtnStyle, flex: 1 }}>
          Continue with Google
        </button>
        <button onClick={handleMagicLink} disabled={loading || !email} style={{ ...secondaryBtnStyle, flex: 1 }}>
          Magic link
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Link href="/forgot-password" style={linkStyle}>Forgot password?</Link>
        <Link href={`/signup?next=${next}`} style={linkStyle}>Create account</Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border-strong)',
  fontSize: '15px',
  outline: 'none',
  background: 'var(--surface)',
  color: 'var(--ink)',
  width: '100%',
  boxSizing: 'border-box',
};

const secondaryBtnStyle: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: 'var(--radius-full)',
  border: '1px solid var(--border-strong)',
  background: 'var(--surface)',
  color: 'var(--ink)',
  fontSize: '13px',
  fontWeight: 500,
  cursor: 'pointer',
};

const linkStyle: React.CSSProperties = {
  fontSize: '13px',
  color: 'var(--ink-secondary)',
  textDecoration: 'none',
};
