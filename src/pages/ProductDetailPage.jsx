import { useParams } from "react-router-dom";
import productList from "../data/productList";

function ProductDetailPage() {
  const { id } = useParams();
  const product = productList.find((item) => item.id === Number(id));
  const discountPrice = Math.floor(product.price * (1 - product.sale / 100));

  if (!product) {
    return <div className="p-4">상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-center gap-32">
        {/* 왼쪽 이미지 */}
        <img
          src={product.image}
          alt={product.title}
          className="w-[40rem] h-auto object-contain rounded-lg"
        />

        {/* 오른쪽 상품 제목 및 가격 */}
        <div className="flex flex-col justify-start gap-2">
          <div>
            <p className="font-bold text-lg">{product.title}</p>
            <p className="text-sm text-gray-600">{product.note}</p>
          </div>

          <p className="font-bold text-2xl">
            <span className="relative top-[-0.3em] text-base">￦</span>
            {discountPrice.toLocaleString()}
          </p>

          <p className="text-sm text-gray-500 mb-16">
            기존가: <span>￦{product.price.toLocaleString()}</span>
          </p>
          {/* 구매 div */}
          <p className="font-bold">어떻게 구매하시겠어요?</p>
          <div className="border border-gray-300 w-[500px] h-[150px] rounded-xl p-3 flex flex-col justify-center mb-4">
            <div className="border-b border-gray-300 p-3">
              <div className="flex gap-2">
                <div>
                  <i className="fas fa-truck"></i>
                </div>
                <div>
                  <p className="font-bold">배송</p>
                  <p className="text-gray-500">재고 확인</p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="flex gap-2">
                <div>
                  <i className="fas fa-store-alt"></i>
                </div>
                <div>
                  <p className="font-bold">매장 구매</p>
                  <p className="text-gray-500">매장 재고 및 재입고 날짜 확인</p>
                </div>
              </div>
            </div>
          </div>
          {/* 갯수 선택 및 장바구니 담기 버튼 */}
          <div className="flex flex-row items-center gap-3 w-full">
            <div className="flex items-center justify-between w-[120px] h-[40px] border border-gray-300 rounded-full px-4">
              <button className="text-xl font-bold">−</button>
              <span className="text-lg font-medium">1</span>
              <button className="text-xl font-bold">＋</button>
            </div>

            <button className="flex-1 h-[40px] rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center transition">
              장바구니에 담기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
