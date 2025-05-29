'use client';

import { Button } from "@/src/components/ui/button";
import { useCartStore } from "@/src/lib/cart-store";
// import { add } from "@dnd-kit/utilities";
import { ChevronRight } from "lucide-react";

export default function CartButton({ product }: any) {

  const addItem = useCartStore((state) => state.addItem);
  const handleAddItem = () => {
    addItem({
        productId: product.id,
        title: product.title,
        price: product.price,
        qty: 1
    });
  };

  return (
    <>
      <Button className="mt-6 shadow-none" onClick={handleAddItem}>
        Add to cart
        <ChevronRight />
      </Button>
    </>
  );
}