import {
  ADD_COIN,
  SET_AVTORIZED,
  GET_EMPTY_IMAGE,

  SET_COUNTRIES,
  GET_COUNTRIES,

  SET_CATEGORIES,
  GET_CATEGORIES,

  SET_COMPOSITIONS,
  GET_COMPOSITIONS,

  SET_TYPESOFQUALITY,
  GET_TYPESOFQUALITY,

  GET_CATEGORIES_IMAGES,
  SET_CATEGORIES_IMAGES,

  GET_IMAGES,
  SET_IMAGES,

  SET_CATALOG,
  GET_CATALOG,

  GET_COIN,
  GET_IMAGE,
} from '../constants';

import catalogData from './data/catalog';
import countriesData from './data/countries';
import categoriesData from './data/categories';
import characteristicsData from './data/characteristics';
import compositionsData from './data/compositions';
import typesofqualityData from './data/typesofquality';
import imagesData from './data/images';

const initialState = {
  catalog: catalogData,
  emptyImage: "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",
  countries: countriesData,
  categories: categoriesData,
  characteristics: characteristicsData,
  compositions: compositionsData,
  typesofquality: typesofqualityData,
  avtorized: false,
  categoriesImages: imagesData,
  images: imagesData,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN:
      return { ...state, catalog: [...state.catalog, action.payload] };
      break;

    case SET_AVTORIZED:
      return { ...state, avtorized: action.payload };
      break;

    case GET_EMPTY_IMAGE:
      return state.emptyImage;
      break;

    case SET_CATALOG:
      return { ...state, catalog: action.payload };
      break;
    case GET_CATALOG:
      return state.catalog;
      break;

    case SET_IMAGES:
      return { ...state, images: action.payload };
      break;
    case GET_IMAGES:
      return state.images;
      break;

    case SET_COUNTRIES:
      return { ...state, countries: action.payload };
      break;
    case GET_COUNTRIES:
      return state.countries;
      break;

    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
      break;
    case GET_CATEGORIES:
      return state.categories;
      break;

    case SET_COMPOSITIONS:
      return { ...state, compositions: action.payload };
      break;
    case GET_COMPOSITIONS:
      return state.compositions;
      break;

    case SET_TYPESOFQUALITY:
      return { ...state, typesofquality: action.payload };
      break;
    case GET_TYPESOFQUALITY:
      return state.typesofquality;
      break;

    case SET_CATEGORIES_IMAGES:
      return { ...state, categoriesImages: action.payload };
      break;
    case GET_CATEGORIES_IMAGES:
      return state.categoriesImages;
      break;

    case GET_COIN:
      return state.catalog.find(x => x.id == action.payload);
      break;

    case GET_IMAGE:
      return state.images.find(x => x.catalogId == action.payload);
      break;

    default:
      return state;
  }
};

export default catalogReducer;
