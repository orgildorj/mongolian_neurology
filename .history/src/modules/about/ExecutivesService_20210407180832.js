import Config from "../../Config";

export const aboutMenuItems = () => {
    const executives = await fetch(`${Config.contentUrl}/executives`);
    return executives.json()

};
