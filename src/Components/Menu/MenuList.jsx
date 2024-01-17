import { Menu } from 'antd';
import {DashboardOutlined, BarsOutlined, CreditCardOutlined, ShoppingCartOutlined, WalletOutlined, TransactionOutlined, RollbackOutlined, AccountBookOutlined, SettingOutlined,} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './MenuList.css';


const MenuList = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
        
        <Menu.Item key="dashboard" icon={<DashboardOutlined/>}>
        <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        
        <Menu.SubMenu key="product" icon={<BarsOutlined/>} title="Product">
            <Menu.Item key="category"><Link to="/product/category">Product Category</Link></Menu.Item>
            <Menu.Item key="list"><Link to="/product/list">Product List</Link></Menu.Item>
            <Menu.Item key="addservices"><Link to="/product/addservices">Services Add</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="purchase" icon={<CreditCardOutlined />} title="Purchase">
            <Menu.Item key="purchaselist"><Link to="/purchase/purchaselist">Purchase List</Link></Menu.Item>
            <Menu.Item key="addpurchase"><Link to="/purchase/addpurchase">Purchase Add</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="sale" icon={<ShoppingCartOutlined />} title="Sale">
            <Menu.Item key="salelist"><Link to="/sale/salelist">Sale List</Link></Menu.Item>
            <Menu.Item key="addsale"><Link to="/sale/addsale">Sale Add</Link></Menu.Item>
            <Menu.Item key="discountcard"><Link to="/sale/discountcard">Discount Card</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="expense" icon={<WalletOutlined />} title="Expense">
            <Menu.Item key="category"><Link to="/expense/excategory">Expense Category</Link></Menu.Item>
            <Menu.Item key="list"><Link to="/expense/exlist">Expense List</Link></Menu.Item>
            <Menu.Item key="addexpense"><Link to="/expense/addexpense">Expense Add</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="transfer" icon={<TransactionOutlined />} title="Transfer">
            <Menu.Item key="list"><Link to="/transfer/trlist">Transfer List</Link></Menu.Item>
            <Menu.Item key="addtransfer"><Link to="/transfer/addtransfer">Transfer Add</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="return" icon={<RollbackOutlined />} title="Return">
            <Menu.Item key="sales"><Link to="/return/sales">Sales Return</Link></Menu.Item>
            <Menu.Item key="purchases"><Link to="/return/purchases">Purchase Return</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="account" icon={<AccountBookOutlined/>} title="Accounts">
            <Menu.Item key="list"><Link to="/account/alist">Account List</Link></Menu.Item>
            <Menu.Item key="addaccount"><Link to="/account/addaccount">Account Add</Link></Menu.Item>
            <Menu.Item key="balancesheet"><Link to="/account/balancesheet">Balance Sheet</Link></Menu.Item>
            <Menu.Item key="accstatement"><Link to="/account/accstatement">Account Statement</Link></Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="setting" icon={<SettingOutlined/>} title="Setting">
            <Menu.Item key="permission"><Link to="/setting/permission">Account Permission</Link></Menu.Item>
            <Menu.Item key="company"><Link to="/setting/company">Company</Link></Menu.Item>
            <Menu.Item key="customerlist"><Link to="/setting/customerlist">Customer List</Link></Menu.Item>
            <Menu.Item key="addcustomer"><Link to="/setting/addcustomer">Customer Add</Link></Menu.Item>
            <Menu.Item key="vendorlist"><Link to="/setting/vendorlist">Vendor List</Link></Menu.Item>
            <Menu.Item key="addvendor"><Link to="/setting/addvendor">Vendor Add</Link></Menu.Item>
            <Menu.Item key="userprofile"><Link to="/setting/userprofile">User Profile</Link></Menu.Item>
                {/* <Menu.SubMenu key="subtask" title="Tasks">
                    <Menu.Item key="subtask=1">Sub_Task 1</Menu.Item>
                    <Menu.Item key="subtask=2">Sub_Task 2</Menu.Item>
                </Menu.SubMenu> */}
        </Menu.SubMenu>
        
    </Menu>
  )
}

export default MenuList