import React, { Children } from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "ADMIN PANEL",
    to: "",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },

  {
    _tag: "CSidebarNavItem",
    name: "DASHBOARD",
    to: "/",
    icon: "cil-puzzle",
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "USER",
    to: "",
    icon: "cil-group",
    _children: [
      {
        _tag: "CSidebarNavDropdown",
        name: "Customer",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Customers",
            to: "/users",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Create Customer",
            to: "/welcome",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Bad Customer",
            to: "/badCustomer",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Trainer",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Trainers",
            to: "/userrs",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Create Trainer",
            to: "/trainer",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Reported Trainer",
            to: "/reportedTrainer",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Live Class Status",
            to: "/VideoListingg",
          },
        ],
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Payment Status",
    to: "",
    icon: "cil-dollar",
    _children: [
      {
        _tag: "CSidebarNavDropdown",
        name: "Point",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Point Status",
            to: "/Lowerbody",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Set price for points",
            to: "/PointConversion",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Membership",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Membership Status",
            to: "/MembershipStatus",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Set Membership Price",
            to: "/SetMembershipPrice",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Live Class",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Live Class Status",
            to: "/PaymentLiveClass",
          },
        ],
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Exercise Management",
    to: "",
    icon: "cil-group",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: " Main Area Of Workout ",
        to: "/MainAreaOfWorkout",
      },
      {
        _tag: "CSidebarNavItem",
        name: " Equipment ",
        to: "/Equipment",
      },
      {
        _tag: "CSidebarNavItem",
        name: " Category ",
        to: "/Category",
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Video",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Video List",
            to: "/ExVideoList",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Register Video",
            to: "/ExRegisterVideo",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Program",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Program List",
            to: "/ProgramList",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Register Program",
            to: "/RegisterProgram",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Live Class",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Live Class List",
            to: "/ExLiveClass",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Register Live Class",
            to: "/ExRegisterLiveClass",
          },
        ],
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Calorie Management",
    to: "",
    icon: "cil-notes",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Calorie List",
        to: "/CalorieList",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Register Calorie",
        to: "/RegisterCalorie",
      },
    ],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Community",
    to: "",
    icon: "cil-group",
    _children: [
      {
        _tag: "CSidebarNavDropdown",
        name: "FAQ Management",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "FAQ",
            to: "/FAQ",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Register FAQ",
            to: "/addfaq",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Notice Management",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Notice List",
            to: "/NoticeList",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Register Notice",
            to: "/RegisterNotice",
          },
        ],
      },
      {
        _tag: "CSidebarNavDropdown",
        name: "Event Management",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Event List",
            to: "/EventList",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Register Event",
            to: "/RegisterEvent",
          },
        ],
      },
      {
        _tag: "CSidebarNavItem",
        name: " Inquiry Management ",
        to: "/InquiryManagement",
      },
    ],
  },

  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "USER",
  //   to: "",
  //   icon: "cil-group",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Customers",
  //       to: "/users",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Create Customer",
  //       to: "/welcome",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Trainers",
  //       to: "/userrs",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Create Trainer",
  //       to: "/trainer",
  //     },
  //   ],
  // },

  //   {
  //     _tag: 'CSidebarNavItem',
  // name: 'PACKAGES',
  //   to: '/packages',
  //   icon: 'cil-storage',

  //   },
  {
    _tag: "CSidebarNavDropdown",
    name: "Program Management",
    to: "",
    icon: "cil-layers",
    _children: [
      {
        _tag: "CSidebarNavDropdown",
        name: "Program Listing",
        to: "",
        _children: [
          {
            _tag: "CSidebarNavItem",
            name: "Programs",
            to: "/Videolisting",
          },
          {
            _tag: "CSidebarNavItem",
            name: "New Program",
            to: "/Newprogram",
          },
          {
            _tag: "CSidebarNavItem",
            name: "Videolisting",
            to: "/video",
          },
          //   {
          //   _tag: 'CSidebarNavItem',
          //   name: 'Subscribe without payment',
          //   to: '/addvideo',
          // },
          // {
          //   _tag: "CSidebarNavItem",
          //   name: "Liveclasses",
          //   to: "/VideoListingg",
          // },
        ],
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Content Management",
    to: "",
    icon: "cil-notes",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "FAQ",
        to: "/FAQ",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Contact us Enquiries",
        to: "/ContactUs",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Recommended Programs",
        to: "/RecommendedPrograms",
      },
    ],
  },

  //   {
  //     _tag: 'CSidebarNavDropdown',
  //   name: ' Category Management ',
  //   to: '',
  //   icon: 'cil-graph',
  //   _children:[
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Category ',
  //       to: '/Categorymanagement',
  //     },

  //   ]

  // },
  {
    _tag: "CSidebarNavItem",
    name: " Point Status ",
    to: "/Lowerbody",
    icon: "cil-dollar",
  },
  {
    _tag: "CSidebarNavItem",
    name: " Block Users ",
    to: "/BlockUsers",
    icon: "cil-lock-locked",
  },
  {
    _tag: "CSidebarNavItem",
    name: " Spam ",
    to: "/Spam",
    icon: "cil-moon",
  },
  {
    _tag: "CSidebarNavItem",
    name: " Wallet ",
    to: "/Wallet",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: " Set Price For Points ",
    to: "/PointConversion",
    icon: "cil-dollar",
  },
];

export default _nav
