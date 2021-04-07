import Config from "../../Config";

export const fetchExec = async () => {
  const executives = await fetch(`${Config.contentUrl}/executives`);
  return executives.json();
};
