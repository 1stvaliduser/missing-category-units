const SpAirT2 = extendContent(UnitType, "arrow", {});
SpAirT2.constructor = () => extend(UnitEntity, {});
SpAirT2.defaultController = () => new FlyingAI();
SpAirT2.abilities.add(new MoveLightningAbility(27, 12, 0.15, 1.1, 4.5, Color.valueOf("#bf92f9")));
SpAirT2.ammoType = AmmoTypes.powerLow;

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "purple-air-dart"), Vars.content.getByName(ContentType.unit, "purple-air-arrow")]);
Blocks.additiveReconstructor.upgrades.add(upgrade.toArray(UnitType));