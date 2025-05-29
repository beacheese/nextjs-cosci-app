'use client';

import { useCartStore } from "@/src/lib/cart-store";
import { useEffect, useState } from "react";
// import { set } from "react-hook-form";
import { Badge } from "@/src/components/ui/badge";
import { ShoppingBasket } from "lucide-react";

export default function CountCartItem() {
  const totalItems = useCartStore((state) => state.totalItems);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  },[]);

  if (!isMounted) return null;

  return (
    <>
      <span>
        {totalItems()}
      </span>
    </>
  );
};