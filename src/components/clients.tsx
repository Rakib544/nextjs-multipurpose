import { clients } from "@/lib/data/clients-data";
import Image from "next/image";
import { InfiniteMoving, InfiniteMovingItem } from "./ui/infinite-moving";

export function Clients() {
  return (
    <InfiniteMoving>
      {clients.map((client) => (
        <InfiniteMovingItem key={client.id} className="w-[150px]">
          <Image src={client.image} alt={client.href} className="" />
        </InfiniteMovingItem>
      ))}
    </InfiniteMoving>
  );
}
