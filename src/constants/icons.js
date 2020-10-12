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

export const BOOKS = faBook;
export const MOVIES = faFilm;

export default {
  // key is the slug name
  books: BOOKS,
  movies: MOVIES,
};

// TODO: clean up this list
export const MENU_ICON = {
  book: faBook,
  blog: faBookReader,
  "cult-resource": faGlobe,
  website: faGlobe,
  organization: faBuilding,
  legal: faBalanceScaleRight,
  recovery: faHandsHelping,
  group: faUsers,
  podcast: faPodcast,
  movie: faFilm,
};
