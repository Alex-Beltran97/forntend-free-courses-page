export const TITLE_TAB = " - Courses";
export const IS_AUTH = () : string | null => sessionStorage.getItem("user") && sessionStorage.getItem("id_token");

export const getUserName = () : string => {
  const { givenName, familyName } = JSON.parse( sessionStorage.getItem("user")! as string ) || {};

  return [ givenName, familyName ].join(" ");
};