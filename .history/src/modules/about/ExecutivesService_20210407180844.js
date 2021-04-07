import Config from "../../Config";

export const aboutMenuItems = async () => {
  const executives = await fetch(`${Config.contentUrl}/executives`);
  return executives.json();
};
