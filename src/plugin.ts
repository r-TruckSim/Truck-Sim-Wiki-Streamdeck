import streamDeck, { LogLevel } from "@elgato/streamdeck";

// Wiki
import { WikiMain } from "./actions/wiki-main";
import { WikiRandom } from "./actions/wiki-random";

// ATS
import { Wiki_ATS_Portal } from "./actions/wiki-ats-portal";
import { Wiki_ATS_States } from "./actions/wiki-ats-states";
import { Wiki_ATS_Cities } from "./actions/wiki-ats-cities";
import { Wiki_ATS_Facilities } from "./actions/wiki-ats-facilities";
import { Wiki_ATS_PatchNotes } from "./actions/wiki-ats-patchnotes";

// ETS2
import { Wiki_ETS2_Portal } from "./actions/wiki-ets2-portal";
import { Wiki_ETS2_Countries } from "./actions/wiki-ets2-countries";
import { Wiki_ETS2_Cities } from "./actions/wiki-ets2-cities";
import { Wiki_ETS2_Facilities } from "./actions/wiki-ets2-facilities";
import { Wiki_ETS2_PatchNotes } from "./actions/wiki-ets2-patchnotes";


// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the increment action.
streamDeck.actions.registerAction(new WikiMain());
streamDeck.actions.registerAction(new WikiRandom());

streamDeck.actions.registerAction(new Wiki_ATS_Portal());
streamDeck.actions.registerAction(new Wiki_ATS_States());
streamDeck.actions.registerAction(new Wiki_ATS_Cities());
streamDeck.actions.registerAction(new Wiki_ATS_Facilities());
streamDeck.actions.registerAction(new Wiki_ATS_PatchNotes());

streamDeck.actions.registerAction(new Wiki_ETS2_Portal());
streamDeck.actions.registerAction(new Wiki_ETS2_Countries());
streamDeck.actions.registerAction(new Wiki_ETS2_Cities());
streamDeck.actions.registerAction(new Wiki_ETS2_Facilities());
streamDeck.actions.registerAction(new Wiki_ETS2_PatchNotes());

// Finally, connect to the Stream Deck.
streamDeck.connect();
