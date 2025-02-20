import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Produtos = () => {
  return (
    <>
      <div className="rounded-xl border border-red-500 p-5">
        <h1 className="text-red-500">Produtos</h1>;<Button>Adicionar</Button>;
        <Input placeholder="Pesquisar produto" />;
      </div>
    </>
  );
};

export default Produtos;
