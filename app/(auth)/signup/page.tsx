'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signUp, signInWithGoogle } from '@/lib/auth/actions';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await signUp(email, password);
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
        Create account
      </h1>

      {error && (
        <p style={{ color: '#c0392b', fontSize: '13px', marginBottom: '16px' }}>{error}</p>
      )}
      {message && (
        <p style={{ color: 'var(--sage)', fontSize: '13px', marginBottom: '16px' }}>{message}</p>
      )}

      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
          placeholder="Password (min 8 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
          style={inputStyle}
        />
        <button type="submit" disabled={loading} className="btn-dark" style={{ width: '100%' }}>
          {loading ? 'Creating account…' : 'Create account'}
        </button>
      </form>

      <button onClick={handleGoogle} disabled={loading} style={{ ...secondaryBtnStyle, width: '100%', marginTop: '12px' }}>
        Continue with Google
      </button>

      <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', marginTop: '16px', textAlign: 'center' }}>
        Already have an account?{' '}
        <Link href="/login" style={{ color: 'var(--ink)', fontWeight: 500 }}>Sign in</Link>
      </p>
    </div>
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
