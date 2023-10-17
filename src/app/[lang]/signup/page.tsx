import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function page() {
  return (
    <ProtectedRoute>
      <div>Hello this is my signup page</div>;
    </ProtectedRoute>
  );
}
