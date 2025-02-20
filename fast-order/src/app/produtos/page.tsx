import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Produtos = () => {
  return (
    <>
      <div className="p-5 border border-red-500 rounded-xl">
        <h1 className="text-red-500">Produtos</h1>;<Button>Adicionar</Button>;
        <Input placeholder="Pesquisar produto" />;
      </div>
    </>
  );
};

export default Produtos;
