import LoginForm from "@/components/LoginForm";

export default function page() {
  return (
    <div className="container mx-auto">
      <div className="py-12">
        <h1 className="text-4xl pb-12 text-center">This is Login Page</h1>
        <LoginForm />
        <div>
          <p className="text-2xl mb-3">
            Use credentials to login and is how auth is working
          </p>
          <p className="mb-1">Username: 'kminchelle', </p>
          <p className="mb-1">Password: '0lelplR',</p>
        </div>
      </div>
    </div>
  );
}
