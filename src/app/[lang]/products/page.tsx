"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

import { getAllProductThunks } from "@/store/thunks/getAllProductThunks";

import ProtectedRoute from "@/protectedRoute/ProtectedRoute";

const page = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const status = useSelector((state: RootState) => state.product.status);
  const error = useSelector((state: RootState) => state.product.error);
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllProductThunks());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center w-[100%] h-[100vh]">
        Loading...
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error || "An error occurred"}</div>;
  }

  const handleClick = () => {
    router.push(`/products/$id`);
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-12">
        <h1 className="text-4xl mb-4">Product List</h1>
        <ul>
          {products.map((product: any) => (
            <li
              key={product.id}
              onClick={handleClick}
              className="cursor-pointer border-white rounded-lg border-[1px] mb-4 px-4 pt-3 pb-4"
            >
              <h2 className="mb-2">{product.title}</h2>
              <p className="mb-1">{product.description}</p>
              <p>Price: ${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
};

export default page;
