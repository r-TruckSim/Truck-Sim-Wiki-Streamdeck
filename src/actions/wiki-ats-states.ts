import streamDeck, { action, KeyDownEvent, SingletonAction, WillAppearEvent} from "@elgato/streamdeck";

@action({ UUID: "com.azgoodaz.trucksim-wiki.wiki-ats-states" })
export class Wiki_ATS_States extends SingletonAction

{
    override onKeyDown(ev: KeyDownEvent): void | Promise<void> 
{
    streamDeck.system.openUrl("https://trucksimulator.wiki.gg/wiki/States");
}
}