import {FiUser, FiDollarSign, FiGrid, FiRadio} from "react-icons/fi"
import {BiMoneyWithdraw, BiLogOut} from "react-icons/bi"


export const navlinks = [
    {
      name: 'dashboard',
      icon: FiGrid,
      link: '/',
    },
    {
      name: 'campaign',
      icon: FiRadio,
      link: '/create-campaign',
    },
    {
      name: 'payment',
      icon: FiDollarSign,
      link: '/',
      disabled: true,
    },
    {
      name: 'withdraw',
      icon: BiMoneyWithdraw,
      link: '/',
      disabled: true,
    },
    {
      name: 'profile',
      icon: FiUser,
      link: '/profile',
    },
    {
      name: 'logout',
      icon: BiLogOut,
      link: '/',
      disabled: true,
    },
  ];