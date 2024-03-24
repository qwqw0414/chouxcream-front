import React, { useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";

interface ProductLikeDialogProps {
  open: boolean;
  handleOpen: () => void;
  product_size: string[];
}

const ProductRecentDialog: React.FC<ProductLikeDialogProps> = ({
  open,
  handleOpen,
  product_size,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleButton = (value: string) => {
    setSelectedProducts((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleProductsSend = () => {
    handleOpen();
    setSelectedProducts([]);
    console.log(selectedProducts);
  };

  return (
    <Dialog open={open} size="xs" handler={handleOpen}>
      <div className="relative flex flex-col">
        <div className="flex justify-center items-center py-[18px] px-[50px]">
          <h2 className="text-lg font-bold text-black">관심 상품 저장</h2>
        </div>
        <div className="absolute top-3 right-3">
          <img
            src="/img/close_icon.svg"
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={handleOpen}
          />
        </div>
        <div className="grid grid-cols-3 gap-2 pt-[10px] px-8">
          {product_size?.map((size, i) => (
            <button
              key={i}
              onClick={() => toggleButton(size)}
              className={`${
                selectedProducts.includes(size)
                  ? "bg-black text-white"
                  : "text-black"
              } border rounded-xl min-h-[52px] border-[#d3d3d3] flex justify-center items-center`}
            >
              <p className="text-sm font-bold">{size}</p>
            </button>
          ))}
        </div>
        <div className="flex justify-center pt-6 px-8 pb-8">
          <Button
            variant="text"
            color="red"
            onClick={() => {
              handleOpen();
              setSelectedProducts([]);
            }}
            className="mr-1"
          >
            <span>취소</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleProductsSend}>
            <span>확인</span>
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductRecentDialog;
