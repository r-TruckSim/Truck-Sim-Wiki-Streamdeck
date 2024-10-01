import streamDeck, { action, KeyDownEvent, SingletonAction, WillAppearEvent} from "@elgato/streamdeck";

@action({ UUID: "com.azgoodaz.trucksim-wiki.wiki-ets2-facilities" })
export class Wiki_ETS2_Facilities extends SingletonAction

{
    override onKeyDown(ev: KeyDownEvent): void | Promise<void> 
{
    streamDeck.system.openUrl("https://trucksimulator.wiki.gg/wiki/Facilities/Euro_Truck_Simulator_2");
}
}