import Config from "../../Config";

export const fetchHonor = async () => {
  const honorary = await fetch(`${Config.contentUrl}/honorary-members
  `);
  return honorary.json();
};
