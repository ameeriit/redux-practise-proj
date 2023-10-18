import ProtectedRoute from "@/protectedRoute/ProtectedRoute";

export default function page() {
  return (
    <ProtectedRoute>
      <div>Hello this is my signup page</div>;
    </ProtectedRoute>
  );
}
