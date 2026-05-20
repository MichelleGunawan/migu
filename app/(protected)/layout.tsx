import { requireUser } from '@/lib/server/user';

// All routes under (protected) require authentication.
// requireUser() redirects to /login if unauthenticated.
export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireUser();
  return <>{children}</>;
}
