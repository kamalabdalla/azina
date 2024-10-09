// Navigation list for different roles

import { MdOutlineAttachMoney, MdOutlineBarChart, MdOutlineCurrencyExchange, MdOutlineGridView, MdOutlineLogout, MdOutlineMessage, MdOutlinePeople, MdOutlineSettings, MdOutlineShoppingBag } from "react-icons/md";

export const adminNavigation = [
    {
      name: "Dashboard",
      icon: <MdOutlineGridView size={18} />,
      path: "/",
    },
    {
      name: "Manage Staff",
      icon: <MdOutlinePeople size={20} />,
      path: "/admin/manage-staff",
    },
    {
      name: "Statistics",
      icon: <MdOutlineBarChart size={20} />,
      path: "/admin/statistics",
    },
    {
      name: "Settings",
      icon: <MdOutlineSettings size={20} />,
      path: "/admin/settings",
    },
    {
      name: "Logout",
      icon: <MdOutlineLogout size={20} />,
      path: "/logout",
    },
  ];
  
  export const staffNavigation = [
    {
      name: "Dashboard",
      icon: <MdOutlineGridView size={18} />,
      path: "/",
    },
    {
      name: "Statistics",
      icon: <MdOutlineBarChart size={20} />,
      path: "/staff/statistics",
    },
    {
      name: "Payment",
      icon: <MdOutlineAttachMoney size={20} />,
      path: "/staff/payment",
    },
    {
      name: "Transactions",
      icon: <MdOutlineCurrencyExchange size={18} />,
      path: "/staff/transactions",
    },
    {
      name: "Messages",
      icon: <MdOutlineMessage size={18} />,
      path: "/staff/messages",
    },
    {
      name: "Settings",
      icon: <MdOutlineSettings size={20} />,
      path: "/staff/settings",
    },
    {
      name: "Logout",
      icon: <MdOutlineLogout size={20} />,
      path: "/logout",
    },
  ];
  