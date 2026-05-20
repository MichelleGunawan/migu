'use client';

import { useState } from 'react';
import Link from 'next/link';
import { forgotPassword } from '@/lib/auth/actions';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await forgotPassword(email);
    if (result?.error) setError(result.error);
    if (result?.success) setMessage(result.success);
    setLoading(false);
  }

  return (
    <div className="card" style={{ borderRadius: 'var(--radius-2xl)' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: 'var(--ink)' }}>
        Reset password
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--ink-secondary)', marginBottom: '24px' }}>
        We&apos;ll send a reset link to your email.
      </p>

      {error && (
        <p style={{ color: '#c0392b', fontSize: '13px', marginBottom: '16px' }}>{error}</p>
      )}
      {message && (
        <p style={{ color: 'var(--sage)', fontSize: '13px', marginBottom: '16px' }}>{message}</p>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <button type="submit" disabled={loading} className="btn-dark" style={{ width: '100%' }}>
          {loading ? 'Sending…' : 'Send reset link'}
        </button>
      </form>

      <p style={{ fontSize: '13px', color: 'var(--ink-secondary)', marginTop: '16px', textAlign: 'center' }}>
        <Link href="/login" style={{ color: 'var(--ink)', fontWeight: 500 }}>Back to sign in</Link>
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
