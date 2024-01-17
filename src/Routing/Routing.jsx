import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Pages/Dashboard';
import AddSale from '../Components/Pages/SaleAdd/AddSale';
import EditSale from '../Components/Pages/SaleAdd/EditSale';
import Student from '../Components/Pages/SaleAdd/Saleaddnew';
import SaleList from '../Components/Pages/SaleList/SaleList';
// import InvoicePdfViewer from '../Components/PdfViewer';
import SaleDiscountCard from '../Components/Pages/SaleDiscount/SaleDiscountCard';
import Edit from '../Components/Pages/SaleDiscount/SaleEdit';
import View from '../Components/Pages/SaleDiscount/SaleView';
import PurchaseList from '../Components/Pages/PurchaseList/PurchaseList';
import PurchaseAdd from '../Components/Pages/PurchaseAdd/PurchaseAdd';
import ProductCat from '../Components/Pages/ProductCat/ProductCat';
import ProductList from '../Components/Pages/ProductList/ProductList';
import ProductServ from '../Components/Pages/ProductServices/ProductServ';
import ExpenseCat from '../Components/Pages/ExpenseCat/ExpenseCat';
import ExpenseList from '../Components/Pages/ExpenseList/ExpenseList';
import ExpenseAdd from '../Components/Pages/ExpenseAdd/ExpenseAdd';
import TransferList from '../Components/Pages/TransferList/TransferList';
import TransferAdd from '../Components/Pages/TransferAdd/TransferAdd';
import ReturnSales from '../Components/Pages/ReturnSales/ReturnSales';
import ReturnPurchase from '../Components/Pages/ReturnPurchase/ReturnPurchase';
import AccountList from '../Components/Pages/AccountList/AccountList';
import AccountAdd from '../Components/Pages/AccountAdd/AccountAdd';
import AccBalanceSheet from '../Components/Pages/AccBalanceSheet/AccBalanceSheet';
import AccStatement from '../Components/Pages/AccStatement/AccStatement';
import AccPermission from '../Components/Pages/SettingAccPermission/AccPermission';
import Company from '../Components/Pages/SettingCompany/Company';
import CustomerList from '../Components/Pages/SettingCustList/CustomerList';
import CustomerAdd from '../Components/Pages/SettingCustAdd/CustomerAdd';
import VendorList from '../Components/Pages/SettingVendList/VendorList';
import VendorAdd from '../Components/Pages/SettingVendAdd/VendorAdd';
import UserProfile from '../Components/Pages/SettingUserProfile/UserProfile';

const Abc = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product/category" element={<ProductCat />} />
      <Route path="/product/list" element={<ProductList />} />
      <Route path="/product/addservices" element={<ProductServ />} />
      <Route path="/purchase/purchaselist" element={<PurchaseList />} />
      <Route path="/purchase/addpurchase" element={<PurchaseAdd />} />
      <Route path="/sale/salelist" element={<SaleList />} />
        {/* <Route path="/sale/salelist/:id" element={<InvoicePdfViewer />} /> */}
      <Route path="/sale/addsale" element={<AddSale />} />
        <Route path="/sale/editsale/:id" element={<EditSale />} />
      <Route path="/sale/saleaddnew" element={<Student />} />
      <Route path="/sale/discountcard" element={<SaleDiscountCard />} />
        <Route path="/sale/discountcard/saleedit/:id" element={<Edit />} />
        <Route path="/sale/discountcard/saleview/:id" element={<View />} />
      <Route path="/expense/excategory" element={<ExpenseCat />} />
      <Route path="/expense/exlist" element={<ExpenseList />} />
      <Route path="/expense/addexpense" element={<ExpenseAdd />} />
      <Route path="/transfer/trlist" element={<TransferList />} />
      <Route path="/transfer/addtransfer" element={<TransferAdd />} />
      <Route path="/return/sales" element={<ReturnSales />} />
      <Route path="/return/purchases" element={< ReturnPurchase />} />
      <Route path="/account/alist" element={<AccountList />} />
      <Route path="/account/addaccount" element={<AccountAdd />} />
      <Route path="/account/balancesheet" element={<AccBalanceSheet />} />
      <Route path="/account/accstatement" element={<AccStatement />} />
      <Route path="/setting/permission" element={<AccPermission />} />
      <Route path="/setting/company" element={<Company />} />
      <Route path="/setting/customerlist" element={<CustomerList />} />
      <Route path="/setting/addcustomer" element={<CustomerAdd />} />
      <Route path="/setting/vendorlist" element={<VendorList />} />
      <Route path="/setting/addvendor" element={<VendorAdd />} />
      <Route path="/setting/userprofile" element={<UserProfile />} />
    </Routes>

  );
};

export default Abc;
