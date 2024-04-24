import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/features/auth/authSlice";
import { ProductService } from "../../services/product/productService";
import { useEffect } from "react";
import { productActions, selectProductList } from "../../store/features/product/productSlice";

const HomePage = () => {
  const dispacth = useDispatch();
  const productList = useSelector(selectProductList);
  console.log('productList', productList);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispacth(logout());
  };

  const getAllProduct = () => {
    ProductService.getAll().then(res => {
      dispacth(productActions.getAllProducts( res?.data ));
    }).catch((error) => {
      console.log('get all prodcuts error', error);
    })
  }

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
