/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
==========================================================================================*/


export default [
  {
    url: "/app/dashboard",
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
  },
  {
    url: "/app/contractors",
    name: "Contractors",
    slug: "contractors",
    icon: "UsersIcon",
  },
  {
    url: "/app/projects",
    name: "Projects",
    slug: "projects",
    icon: "InboxIcon",
  },
  {
    url: null,
    name: 'Iterations',
    icon: 'TargetIcon',
    i18n: 'Iterations',
    submenu: [
      {
        url: '/app/status',
        name: 'Status',
        slug: 'statuses',
        i18n: 'Status'
      },
      {
        url: '/app/labels',
        name: 'Label',
        slug: 'label',
        i18n: 'Label'
      },
      {
        url: '/app/agencies',
        name: 'Agencies',
        slug: 'agencies',
        i18n: 'Agencies'
      }
    ]
  },
  {
    url: "/app/employees",
    name: "Employees",
    slug: "employees",
    icon: "UserPlusIcon",
  },
  {
    url: "/app/analytics",
    name: "Analytics",
    slug: "analytics",
    icon: "BarChartIcon",
  },
  {
    url: "/app/settings",
    name: "Settings",
    slug: "settings",
    icon: "SettingsIcon",
  },
  {
    url: null,
    name: "Logout",
    slug: "logout",
    icon: "LogOutIcon",
  },
]
