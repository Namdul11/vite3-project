import { Route, Routes } from "react-router-dom";
import CreateProduct from "./product/CreateProduct";
import ProductDetails from "./product/ProductDetail";
import UpdateProduct from "./product/UpdateProduct";
import ReadAllProduct from "./product/ReadAllProduct";
import CreateUser from "./user/CreateUser";
import ReadAllUser from "./user/ReadAllUser";
import UserDetails from "./user/UserDetail";
import UpdateUser from "./user/UpdateUser";
import CreateReview from "./review/CreateReview";
import ReadAllReview from "./review/ReadAllReview";
import ReviewDetails from "./review/ReviewDetails";
import UpdateReview from "./review/UpdateReview";

  const DwRoute=()=>{
    return (
    <div>
      <Routes>
        <Route path="product">
          <Route index element={<ReadAllProduct></ReadAllProduct>}></Route>
          <Route 
          path="create"
          element={<CreateProduct></CreateProduct>}> 
          </Route>
          <Route 
          path="id"
          element={<ProductDetails></ProductDetails>}> 
          </Route>
          <Route 
          path="update/:id"
          element={<UpdateProduct></UpdateProduct>}> 
          </Route>
        </Route>
          <Route path="user">
          <Route index element={<ReadAllUser></ReadAllUser>}></Route>
          <Route 
          path="create"
          element={<CreateUser></CreateUser>}> 
          </Route>
          <Route 
          path="id"
          element={<UserDetails></UserDetails>}> 
          </Route>
          <Route 
          path="update/:id"
          element={<UpdateUser></UpdateUser>}> 
          </Route>
        </Route>
          <Route path="review">
          <Route index element={<ReadAllReview></ReadAllReview>}></Route>
          <Route 
          path="create"
          element={<CreateReview></CreateReview>}> 
          </Route>
          <Route 
          path="id"
          element={<ReviewDetails></ReviewDetails>}> 
          </Route>
          <Route 
          path="update/:id"
          element={<UpdateReview></UpdateReview>}> 
          </Route>
        </Route>
      </Routes>
      </div>)
  };
  export default DwRoute;
  /* 
  change component based on url
  localhost:3000/user/create=>CreateUser
  localhost:3000/user=>ReadAllUser
  localhost:3000/user/:id=>UserDetail
  localhost:3000/user/update/:id=>UpdateUser
  crud
  */