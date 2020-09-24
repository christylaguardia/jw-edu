import {
  faBook,
  faBookReader,
  faGlobe,
  faBuilding,
  faFilm,
  faPodcast,
  faUsers,
  faBalanceScaleRight,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

// Should be replaced with site data
export const SITE_NAME = "JW Research";
export const SITE_DESC = "Search for books and websites about Jehovah's Witnesses";

export const PATH = {
  BOOKS: "books",
  BLOGS: "blogs",
  CULT_RESOURCES: "cult-resources",
  ORGANIZATIONS: "organizations",
  LEGAL: "legal",
  RECOVERY: "recovery",
  GROUPS: "groups",
  PODCASTS: "podcasts",
  FILMS: "films",
};

export const RESOURCE_INFO = [
  { path: PATH.BOOKS, title: "Books", icon: faBook },
  { path: PATH.BLOGS, title: "Blogs", icon: faBookReader },
  { path: PATH.CULT_RESOURCES, title: "Cult Resources", icon: faGlobe },
  { path: PATH.ORGANIZATIONS, title: "Organizations", icon: faBuilding },
  { path: PATH.LEGAL, title: "Legal", icon: faBalanceScaleRight },
  { path: PATH.RECOVERY, title: "Recovery", icon: faHandsHelping },
  { path: PATH.GROUPS, title: "Groups", icon: faUsers },
  { path: PATH.PODCASTS, title: "Podcasts", icon: faPodcast },
  { path: PATH.FILMS, title: "Films", icon: faFilm },
];
