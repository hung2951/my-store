import { Route, Routes } from 'react-router-dom'
import LayoutPrivate from '../layout/layoutPrivate'
import DashBoard from '../pages/admin/dashboard'
import ListCategories from '../pages/admin/categories';
import ListUser from '../pages/admin/users';
import CreateUser from '../pages/admin/users/add';

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="admin" element={<LayoutPrivate />}>
        <Route index element={<DashBoard />} />
        <Route path="user">
          <Route index element={<ListUser />} />
          <Route path='add' element={<CreateUser />} />
        </Route>
        <Route path="categories">
          <Route index element={<ListCategories />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default PrivateRoute