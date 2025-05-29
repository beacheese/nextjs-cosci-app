'use client';

import { Button } from "@/src/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table";
import { product } from "@/src/db/schema";
import { useCartStore } from "@/src/lib/cart-store";
import { clear } from "console";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartList() {
  const router = useRouter();

  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (items.length === 0) {
    return <div className="text-center mt-20 text-zinc-400">Empty cart...</div>
  };

  return (
    <div className="mx-auto max-w-4l mt-20">
      <h1 className="text-3xl mb-4 font-bold tracking-tight">Cart Lists</h1>
      <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Product ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>QTY</TableHead>
                <TableHead>Total</TableHead>

                <TableHead>Tools</TableHead>

            </TableRow>
        </TableHeader>
        <TableBody>
            {
                items.map((i) => (
                    <TableRow key={i.productId}>
                        <TableCell>{i.productId}</TableCell>
                        <TableCell>{i.title}</TableCell>
                        <TableCell>{i.price}</TableCell>
                        <TableCell>{i.qty}</TableCell>
                        <TableCell>{(i.price * i.qty).toFixed(2)}</TableCell>

                        <TableCell>
                            <Button variant="destructive" onClick={() => { removeItem(i.productId); } }>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
      <div className="text-right mt-4">
        <div className="text-xl font-bold">
            Total price: {totalPrice.toFixed(2)} THB
        </div>
        <div className="my-4 text-zinc-400">
            <Button className="mr-4" variant="ghost" onClick={() => { clearCart(); }}>Clear all product...</Button>
            <Button onClick={() => {
                clearCart();
                router.replace('/product');
            } }>
                Confirm order
            </Button>
        </div>
      </div>
    </div>
  );
}