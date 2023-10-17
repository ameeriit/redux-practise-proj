import LoginForm from "@/components/LoginForm";

export default function page() {
  return (
    <>
      <div className="flex justify-center items-center h-[80vh]">
        <div>
          This is my login page
          <h2>Login</h2>
          <LoginForm />
          <div>
            <p>username: 'kminchelle', </p>
            <p>password: '0lelplR',</p>
          </div>
        </div>
      </div>
    </>
  );
}
