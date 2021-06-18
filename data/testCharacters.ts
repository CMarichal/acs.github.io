import { Character } from "model/character";
import { JobMelee } from "model/job";
import { RaceBrokenLord } from "model/race";

export const testCharacter: Character = new Character("Bob Morane", new RaceBrokenLord(), new JobMelee());
