import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ButtonAction = () => {
  return (
    <Link href="https://wa.me/5544998692094" target="_blank">
      <Button
        size="lg"
        variant="secondary"
        className="mt-10 font-bold  shadow-secondary shadow-sm"
      >
        Solicitar Orçamento
      </Button>
    </Link>
  );
};
