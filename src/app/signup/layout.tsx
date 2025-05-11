export const metadata = {
  title: 'Sign Up - Brilliant Learning',
  description: 'Create your personalized learning path',
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="signup-layout">
      {children}
    </div>
  );
}