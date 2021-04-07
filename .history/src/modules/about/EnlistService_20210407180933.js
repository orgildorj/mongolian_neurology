import Config from "../../Config";

export const fetchEnlist = async () => {
  const enlist = await fetch(`${Config.contentUrl}/enlist`);
  return enlist.json();
};
