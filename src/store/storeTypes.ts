export interface AuthState {
  user: {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
  };
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ProductState {
  products: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface TodoState {
  todos: [];
  isLoading: boolean;
  error: string | null;
}
