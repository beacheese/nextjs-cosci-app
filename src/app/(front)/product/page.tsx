import Footer05Page from "@/src/components/footer-05/footer-05";
import { Badge } from "@/src/components/ui/badge";
// import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import db from "@/src/db";
import { product } from "@/src/db/schema";
import { desc } from "drizzle-orm";
// import { ChevronRight } from "lucide-react";
import CartButton from "../components/CartButton";

const Product = async () => {
  const products = await db.query.product.findMany({
    orderBy: [desc(product.id)],
  });

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">

      {/* <p>{JSON.stringify(products)}</p> */}

      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Product Lists</h2>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((i) => (
          <Card key={i.id} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b" />
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {i.price} THB
                </Badge>
                <span className="font-medium text-xs text-muted-foreground">
                  Bestseller
                </span>
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {i.title}
              </h3>
              <CartButton product={i} />
            </CardContent>
          </Card>
        ))}
      </div>
      <>
        <Footer05Page />
      </>
    </div>
  );
};

export default Product;
