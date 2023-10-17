"use client";

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { AppDispatch, RootState } from "@/store/store";
import { fetchProductThunks } from "@/store/thunks/fetchProductThunks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const status = useSelector((state: RootState) => state.product.status);
  const error = useSelector((state: RootState) => state.product.error);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchProductThunks());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error || "An error occurred"}</div>;
  }

  return (
    <ProtectedRoute>
      <div>
        <h1>Product List</h1>
        <ul>
          {products.map((product: any) => (
            <li key={product.id} className="cursor-pointer">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
};

export default page;
