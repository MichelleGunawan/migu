import { getUserProfile } from '@/lib/server/user';
import { signOut } from '@/lib/auth/actions';

export default async function DashboardPage() {
  const profile = await getUserProfile();

  return (
    <div style={{ padding: '48px', maxWidth: '960px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--ink)' }}>Dashboard</h1>
        <form action={signOut}>
          <button
            type="submit"
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-strong)',
              background: 'transparent',
              color: 'var(--ink-secondary)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Sign out
          </button>
        </form>
      </div>

      <div className="card">
        <p className="label" style={{ marginBottom: '4px' }}>Signed in as</p>
        <p style={{ fontSize: '15px', color: 'var(--ink)', fontWeight: 500 }}>
          {profile?.email ?? '—'}
        </p>
      </div>
    </div>
  );
}
