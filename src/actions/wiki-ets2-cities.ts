import streamDeck, { action, KeyDownEvent, SingletonAction, WillAppearEvent} from "@elgato/streamdeck";

@action({ UUID: "com.azgoodaz.trucksim-wiki.wiki-ets2-cities" })
export class Wiki_ETS2_Cities extends SingletonAction

{
    override onKeyDown(ev: KeyDownEvent): void | Promise<void> 
{
    streamDeck.system.openUrl("https://trucksimulator.wiki.gg/wiki/Cities/Euro_Truck_Simulator_2");
}
}