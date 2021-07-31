/*
A data object storing data used throughout the app to prevent hardcoding and promote reusability of components
*/
import logo from "../images/logoWhite.png";
import appStoreMobile from "../images/appleIconMobile.png";
import playStoreMobile from "../images/playIconMobile.png";
import cakeFive from "@iconify-icons/icon-park-outline/cake-five";

const data = {};

// Links to images used throughout the app
data.images = {
  logo: logo,
  googlePlay:
    "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
};

// Images and links used for the ImageLink components
data.appLinks = [
  {
    link: "https://play.google.com/store/apps/details?id=com.olioex.android&hl=en_GB&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    image: "https://olioex.com/wp-content/uploads/2019/08/Google-Play-icon.png",
    mobileImage: playStoreMobile,
  },
  {
    link: "https://apps.apple.com/gb/app/olio-food-sharing-revolution/id1008237086",
    image: "https://olioex.com/wp-content/uploads/2019/08/App-Store-icon.png",
    mobileImage: appStoreMobile,
  },
];

data.mapResources = {
  markerIcon: cakeFive,
};
export default data;
