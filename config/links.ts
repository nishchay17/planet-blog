export const Links = {
  signin: {
    href: "/signin",
    name: "signin",
    title: "Sign in",
  },
  signup: {
    href: "/signup",
    name: "signup",
    title: "Sign up",
  },
  dashboard: {
    title: "Dashboard",
    href: "/dashboard",
    icon: "profile",
    name: "dashboard",
  },
  landing: {
    title: "Home",
    href: "/",
    icon: "",
    name: "landing",
  },
  allBlogs: {
    title: "All Blogs",
    href: "/blogs",
    icon: "",
    name: "allBlogs",
  },
  tags: {
    title: "Tags",
    href: "/tags",
    icon: "",
    name: "tags",
  },
} as const;
