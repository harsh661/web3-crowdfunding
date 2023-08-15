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
      link: '/create',
    },
    {
      name: 'payment',
      icon: FiDollarSign,
      link: '/payment',
      disabled: true,
    },
    {
      name: 'withdraw',
      icon: BiMoneyWithdraw,
      link: '/withdraw',
      disabled: true,
    },
    {
      name: 'profile',
      icon: FiUser,
      link: '/profile',
    }
  ];