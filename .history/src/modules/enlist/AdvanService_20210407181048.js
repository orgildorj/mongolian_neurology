import Config from "../../Config";

export const fetchAdv = async () => {
  const enlist_adv = await fetch(`${Config.contentUrl}/enlist-advantages`);
  return enlist_adv.json();
};
