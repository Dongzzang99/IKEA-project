import productList from "../../data/productList";

function CategoryProductList({ category }) {
  //category 값 확인후 알맞은 리스트 띄우는 삼항 연산자
  const filteredProducts =
    category === "none"
      ? []
      : productList.filter((item) => item.category === category);

  const isOpen = filteredProducts.length > 0;

  return (
    //상품 리스트 애니메이션 태그
    <div
      className={`
      overflow-hidden transition-all duration-300 ease-out
      ${
        isOpen
          ? "max-h-[500px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-2"
      }
    `}
    >
      <div className="overflow-x-auto">
        <div className="flex gap-3 w-max pb-4">
          {filteredProducts.slice(0, 10).map((item) => {
            const discountPrice = Math.floor(
              item.price * (1 - item.sale / 100)
            );

            return (
              <div key={item.id} className="w-[180px] flex-shrink-0">
                <img
                  src={item.image}
                  className="pb-4 w-full h-[180px] object-cover"
                />

                <p className="font-bold text-sm">{item.title}</p>
                <p className="pb-2 text-[0.75rem] text-gray-600">{item.note}</p>

                <p className="font-bold text-[1.25rem] pb-1">
                  <span className="relative top-[-0.5em] text-[0.6em]">￦</span>
                  {discountPrice.toLocaleString()}
                </p>

                <p className="text-[0.75rem] text-gray-500">
                  기존가: ￦{item.price.toLocaleString()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryProductList;
