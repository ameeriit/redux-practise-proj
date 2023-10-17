export interface AuthState {
  user: {
    username: "";
    email: "";
    firstName: "";
    lastName: "";
    gender: "";
    image: "";
    token: "";
  };
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  token: string;
}

export interface ProductState {
  products: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
