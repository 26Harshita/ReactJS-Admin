import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const BlockUsers = React.lazy(() => import("./views/users/BlockUsers"));
const Spam = React.lazy(() => import("./views/users/Spam"));
const Wallet = React.lazy(() => import("./views/users/Wallet"));
const CalorieList = React.lazy(() => import("./views/users/CalorieList"));
const ProgramList = React.lazy(() => import("./views/users/ProgramList"));
const RegisterProgram = React.lazy(() => import("./views/users/RegisterProgram"));
const ExLiveClass = React.lazy(() => import("./views/users/ExLiveClass"));
const ExRegisterLiveClass = React.lazy(() => import("./views/users/ExRegisterLiveClass"));
const ExVideoList = React.lazy(() => import("./views/users/ExVideoList"));
const ExRegisterVideo = React.lazy(() => import("./views/users/ExRegisterVideo"));
const MainAreaOfWorkout = React.lazy(() => import("./views/users/MainAreaOfWorkout"));
const Equipment = React.lazy(() => import("./views/users/Equipment"));
const Category = React.lazy(() => import("./views/users/Category"));
const PaymentLiveClass = React.lazy(() =>
  import("./views/users/PaymentLiveClass")
);
const RegisterCalorie = React.lazy(() =>
  import("./views/users/RegisterCalorie")
);
const MembershipStatus = React.lazy(() => import("./views/users/MembershipStatus"));
const SetMembershipPrice = React.lazy(() => import("./views/users/SetMembershipPrice"));
const NoticeList = React.lazy(() => import("./views/users/NoticeList"));
const RegisterNotice = React.lazy(() => import("./views/users/RegisterNotice"));
const EventList = React.lazy(() => import("./views/users/EventList"));
const RegisterEvent = React.lazy(() => import("./views/users/RegisterEvent"));
const InquiryManagement = React.lazy(() => import("./views/users/InquiryManagement"));
const BadCustomer = React.lazy(() => import("./views/users/BadCustomer"));
const ReportedTrainer = React.lazy(() =>
  import("./views/users/ReportedTrainer")
);
const PointConversion = React.lazy(() =>
  import("./views/users/PointConversion")
);
const User = React.lazy(() => import("./views/users/User"));
const Userrs = React.lazy(() => import("./views/base/Instructor/Users"));
// const CreateCustomer = React.lazy(() => import("./views/users/CreateCustomer"));
const Userr = React.lazy(() => import("./views/base/Instructor/User"));
const Catagory = React.lazy(() => import("./views/base/catagory/Users"));
const Catagoryy = React.lazy(() => import("./views/base/catagory/User"));
const Trainers = React.lazy(() => import("./views/base/userrs/Users"));
const Trainer = React.lazy(() => import("./views/base/userrs/User"));
const Videos = React.lazy(() => import("./views/base/video/Users"));
const Video = React.lazy(() => import("./views/base/video/user"));
const Dashboardss = React.lazy(() => import("./views/base/Dashboards/Users"));
const Dashboards = React.lazy(() => import("./views/base/Dashboards/User"));
const Subcatagorys = React.lazy(() => import("./views/base/Lowerbody/Users"));
const Subcatagory = React.lazy(() => import("./views/base/Lowerbody/User"));
const Packagess = React.lazy(() => import("./views/base/Packages/Users"));
const Packages = React.lazy(() => import("./views/base/Packages/User"));
const Upperbodys = React.lazy(() => import("./views/base/upperbody/Users"));
const Upperbody = React.lazy(() => import("./views/base/Packages/User"));
const VideoListings = React.lazy(() =>
  import("./views/base/Videolisting/Users")
);
const VideoListing = React.lazy(() => import("./views/base/Videolisting/User"));
const Filterings = React.lazy(() => import("./views/base/Filtering/Users"));
const Filtering = React.lazy(() => import("./views/base//Filtering/User"));

const CreateCustomer = React.lazy(() => import("./componets/login.componet"));
const CreateTrainer = React.lazy(() =>
  import("./componets/trainerlogin.componet")
);
const VideoLisgs = React.lazy(() => import("./views/base/VideoListingg/Users"));
const VideoLisg = React.lazy(() => import("./views/base/VideoListingg/User"));
const Uppercomponet = React.lazy(() =>
  import("./componets/upperbody.componet")
);
const Lowercomponet = React.lazy(() =>
  import("./componets/lowerbody.componet")
);
const Videocomponet = React.lazy(() => import("./componets/video.componet"));
const Videoscomponet = React.lazy(() => import("./componets/videos.componet"));
const Packagescomponet = React.lazy(() =>
  import("./componets/package.componet")
);
const Addvideocomponet = React.lazy(() =>
  import("./componets/addvideo.componet")
);
const Addnewprogram = React.lazy(() =>
  import("./componets/addnewprogram.componet")
);
const ProgramInstructors = React.lazy(() =>
  import("./views/base/ProgramInstructor/Users")
);
const ProgramInstructor = React.lazy(() =>
  import("./views/base/ProgramInstructor/User")
);
const ExerciseNames = React.lazy(() =>
  import("./views/base/ExerciseName/Users")
);
const ExerciseName = React.lazy(() => import("./views/base/ExerciseName/User"));
const Faqs = React.lazy(() => import("./views/base/FAQ/Users"));
const Faq = React.lazy(() => import("./views/base/FAQ/User"));
const Contactuss = React.lazy(() => import("./views/base/ContactUs/Users"));
const Contactus = React.lazy(() => import("./views/base/ContactUs/User"));
const Recommendedprograms = React.lazy(() =>
  import("./views/base/RecommendedPrograms/Users")
);
const Recommendedprogram = React.lazy(() =>
  import("./views/base/RecommendedPrograms/User")
);
const Categorymanagements = React.lazy(() =>
  import("./views/base/Categorymanagement/Users")
);
const Categorymanagement = React.lazy(() =>
  import("./views/base/Categorymanagement/User")
);
const Newcategory = React.lazy(() =>
  import("./componets/newcategory.componet")
);
const UpdateCategory = React.lazy(() =>
  import("./componets/updateuser.componet")
);
const Activate = React.lazy(() =>
  import("./componets/activedeactive.componet")
);
const Password = React.lazy(() =>
  import("./componets/changepassword.componet")
);
const Trainerupdate = React.lazy(() =>
  import("./componets/updatetrainer.componet")
);
const Programupdate = React.lazy(() =>
  import("./componets/updateprograms.componet")
);
const Userdetails = React.lazy(() => import("./componets/userview.componet"));
const Trainerdetails = React.lazy(() =>
  import("./componets/trainerview.componet")
);
const Updatecategoryy = React.lazy(() =>
  import("./componets/updatecategory.componet")
);
const Liveupdate = React.lazy(() =>
  import("./componets/liveclassesupdate.componet")
);
const Addfaq = React.lazy(() => import("./componets/addfaq.componet"));
const Addcontact = React.lazy(() => import("./componets/addcontact.componet"));
const Adminprofile = React.lazy(() =>
  import("./componets/adminprofile.componet")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  // {
  //   path: "/CreateCustomer",
  //   exact: true,
  //   name: "CreateCustomer",
  //   component: CreateCustomer,
  // },
  {
    path: "/BlockUsers",
    exact: true,
    name: "Block Users",
    component: BlockUsers,
  },
  { path: "/Spam", exact: true, name: "Spam", component: Spam },
  { path: "/Wallet", exact: true, name: "Wallet", component: Wallet },
  {
    path: "/CalorieList",
    exact: true,
    name: "CalorieList",
    component: CalorieList,
  },
  {
    path: "/ProgramList",
    exact: true,
    name: "ProgramList",
    component: ProgramList,
  },
  {
    path: "/RegisterProgram",
    exact: true,
    name: "RegisterProgram",
    component: RegisterProgram,
  },
  {
    path: "/ExLiveClass",
    exact: true,
    name: "ExLiveClass",
    component: ExLiveClass,
  },
  {
    path: "/ExRegisterLiveClass",
    exact: true,
    name: "ExRegisterLiveClass",
    component: ExRegisterLiveClass,
  },
  {
    path: "/MainAreaOfWorkout",
    exact: true,
    name: "MainAreaOfWorkout",
    component: MainAreaOfWorkout,
  },
  {
    path: "/ExVideoList",
    exact: true,
    name: "ExVideoList",
    component: ExVideoList,
  },
  {
    path: "/ExRegisterVideo",
    exact: true,
    name: "ExRegisterVideo",
    component: ExRegisterVideo,
  },
  {
    path: "/Equipment",
    exact: true,
    name: "Equipment",
    component: Equipment,
  },
  {
    path: "/Category",
    exact: true,
    name: "Category",
    component: Category,
  },
  {
    path: "/PaymentLiveClass",
    exact: true,
    name: "PaymentLiveClass",
    component: PaymentLiveClass,
  },
  {
    path: "/RegisterCalorie",
    exact: true,
    name: "RegisterCalorie",
    component: RegisterCalorie,
  },
  {
    path: "/MembershipStatus",
    exact: true,
    name: "MembershipStatus",
    component: MembershipStatus,
  },
  {
    path: "/SetMembershipPrice",
    exact: true,
    name: "SetMembershipPrice",
    component: SetMembershipPrice,
  },
  {
    path: "/EventList",
    exact: true,
    name: "EventList",
    component: EventList,
  },
  {
    path: "/RegisterEvent",
    exact: true,
    name: "RegisterEvent",
    component: RegisterEvent,
  },
  {
    path: "/InquiryManagement",
    exact: true,
    name: "InquiryManagement",
    component: InquiryManagement,
  },
  {
    path: "/NoticeList",
    exact: true,
    name: "NoticeList",
    component: NoticeList,
  },
  {
    path: "/RegisterNotice",
    exact: true,
    name: "RegisterNotice",
    component: RegisterNotice,
  },
  {
    path: "/badCustomer",
    exact: true,
    name: "badCustomer",
    component: BadCustomer,
  },
  {
    path: "/reportedTrainer",
    exact: true,
    name: "reportedTrainer",
    component: ReportedTrainer,
  },

  {
    path: "/PointConversion",
    exact: true,
    name: "Set Price For Points",
    component: PointConversion,
  },
  { path: "/Instructor", exact: true, name: "Users", component: Userrs },
  {
    path: "/Instructor/:id",
    exact: true,
    name: "User Details",
    component: Userr,
  },
  { path: "/catagory", exact: true, name: "Category", component: Catagory },
  {
    path: "/catagory/:id",
    exact: true,
    name: "User Details",
    component: Catagoryy,
  },
  { path: "/userrs", exact: true, name: "Trainer", component: Trainers },
  {
    path: "/userrs/:id",
    exact: true,
    name: "User Details",
    component: Trainer,
  },
  { path: "/video", exact: true, name: "Videolisting", component: Videos },
  { path: "/video/:id", exact: true, name: "User Details", component: Video },
  { path: "/Dashboards", exact: true, name: "Users", component: Dashboardss },
  {
    path: "/Dashboards/:id",
    exact: true,
    name: "User Details",
    component: Dashboards,
  },
  {
    path: "/Lowerbody",
    exact: true,
    name: "Point Status",
    component: Subcatagorys,
  },
  {
    path: "/Lowerbody/:id",
    exact: true,
    name: "User Details",
    component: Subcatagory,
  },
  { path: "/Packages", exact: true, name: "Packages", component: Packagess },
  {
    path: "/Packages/:id",
    exact: true,
    name: "User Details",
    component: Packages,
  },
  { path: "/upperbody", exact: true, name: "Upperbody", component: Upperbodys },
  {
    path: "/upperbody/:id",
    exact: true,
    name: "UpperBody",
    component: Upperbody,
  },
  {
    path: "/Videolisting",
    exact: true,
    name: "Programs",
    component: VideoListings,
  },
  {
    path: "/Videolisting/:id",
    exact: true,
    name: "VideoListing",
    component: VideoListing,
  },
  { path: "/Filtering", exact: true, name: "Filtering", component: Filterings },
  {
    path: "/Filtering/:id",
    exact: true,
    name: "Filtering",
    component: Filtering,
  },
  { path: "/welcome", exact: true, name: "NewUser", component: CreateCustomer },
  {
    path: "/trainer",
    exact: true,
    name: "NewTrainer",
    component: CreateTrainer,
  },
  {
    path: "/VideoListingg",
    exact: true,
    name: "Live classes",
    component: VideoLisgs,
  },
  {
    path: "/VideoListingg/:id",
    exact: true,
    name: "VideoListing",
    component: VideoLisg,
  },
  { path: "/wel", exact: true, name: "NewUpperbody", component: Uppercomponet },
  {
    path: "/come",
    exact: true,
    name: "NewLowerbody",
    component: Lowercomponet,
  },
  { path: "/videos", exact: true, name: "NewVideo", component: Videocomponet },
  {
    path: "/videoss",
    exact: true,
    name: "NewVideos",
    component: Videoscomponet,
  },
  {
    path: "/package",
    exact: true,
    name: "NewPackages",
    component: Packagescomponet,
  },
  {
    path: "/addvideo",
    exact: true,
    name: "Subscribe Without Payment",
    component: Addvideocomponet,
  },

  {
    path: "/program",
    exact: true,
    name: "Newprogram",
    component: Addnewprogram,
  },
  {
    path: "/ProgramInstructor",
    exact: true,
    name: "Program Instructor Details",
    component: ProgramInstructors,
  },
  {
    path: "/ProgramInstructor/:id",
    exact: true,
    name: "VideoListing",
    component: ProgramInstructor,
  },
  {
    path: "/ExerciseName",
    exact: true,
    name: "Exercise Details",
    component: ExerciseNames,
  },
  {
    path: "/ExerciseName/:id",
    exact: true,
    name: "VideoListing",
    component: ExerciseName,
  },
  { path: "/FAQ", exact: true, name: "FAQ", component: Faqs },
  { path: "/FAQ:id", exact: true, name: "VideoListing", component: Faq },
  { path: "/ContactUs", exact: true, name: "Contactus", component: Contactuss },
  {
    path: "/ContactUs/:id",
    exact: true,
    name: "VideoListing",
    component: Contactus,
  },
  {
    path: "/RecommendedPrograms",
    exact: true,
    name: "Recommended Programs",
    component: Recommendedprograms,
  },
  {
    path: "/RecommendedPrograms/:id",
    exact: true,
    name: "VideoListing",
    component: Recommendedprogram,
  },
  {
    path: "/Categorymanagement",
    exact: true,
    name: "Category Management",
    component: Categorymanagements,
  },
  {
    path: "/Categorymanagement/:id",
    exact: true,
    name: "VideoListing",
    component: Categorymanagement,
  },
  {
    path: "/newcategory",
    exact: true,
    name: "New Category",
    component: Newcategory,
  },
  {
    path: "/update/:id",
    exact: true,
    name: "Update user",
    component: UpdateCategory,
  },
  {
    path: "/activate",
    exact: true,
    name: "Activate Or Deactivate",
    component: Activate,
  },
  { path: "/change", exact: true, name: "Changepassword", component: Password },
  {
    path: "/updates/:id",
    exact: true,
    name: "updatetrainer",
    component: Trainerupdate,
  },
  {
    path: "/program/:id",
    exact: true,
    name: "updatePrograms",
    component: Programupdate,
  },
  {
    path: "/userdetail/:id",
    exact: true,
    name: "View UserDetails",
    component: Userdetails,
  },
  {
    path: "/trainerdetail/:id",
    exact: true,
    name: "View Trainer Details",
    component: Trainerdetails,
  },
  {
    path: "/updatecategory/:id",
    exact: true,
    name: "Update Category",
    component: Updatecategoryy,
  },
  {
    path: "/liveupdate/:id",
    exact: true,
    name: "Live Class Update",
    component: Liveupdate,
  },
  { path: "/addfaq", exact: true, name: "Add Faq", component: Addfaq },
  { path: "/addcontact", exact: true, name: "Add Faq", component: Addcontact },
  {
    path: "/admin",
    exact: true,
    name: "Admin Profile",
    component: Adminprofile,
  },
];

export default routes;
