const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Plugins.Touch,
		C3.Plugins.advert,
		C3.Plugins.Mouse,
		C3.Plugins.Tilemap,
		C3.Plugins.TiledBg,
		C3.Behaviors.MoveTo,
		C3.Plugins.Particles,
		C3.Behaviors.Pin,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Cnds.OnWheel,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.layoutscale,
		C3.Plugins.System.Acts.SetLayoutScale,
		C3.Plugins.Touch.Cnds.OnNthTouchStart,
		C3.Plugins.Touch.Exps.XAt,
		C3.Plugins.Touch.Exps.YAt,
		C3.Plugins.Touch.Cnds.HasNthTouch,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.advert.Acts.CreateRewarded,
		C3.Plugins.advert.Cnds.OnRewardedReady,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.advert.Acts.ShowRewarded,
		C3.Plugins.advert.Cnds.OnRewardedComplete,
		C3.Plugins.advert.Cnds.OnRewardedCancelled,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Tilemap.Exps.Width,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Tilemap.Acts.SetTile,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Particles.Acts.SetPosToObject,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Behaviors.MoveTo.Cnds.OnArrived,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.MoveTo.Cnds.IsMoving,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.TiledBg.Exps.Y,
		C3.Plugins.TiledBg.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Particles.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{InitialTouch_X: 0},
	{InitialTouch_Y: 0},
	{State: 0},
	{LastPosition_X: 0},
	{LastPosition_Y: 0},
	{CurrentZoom: 0},
	{DoubleTouchDistance: 0},
	{ScrollTo: 0},
	{Camera: 0},
	{Touch: 0},
	{MobileAdvert: 0},
	{Mouse: 0},
	{Residential0: 0},
	{Residential1: 0},
	{Residential2: 0},
	{Residential3: 0},
	{Residential4: 0},
	{Residential5: 0},
	{Residential6: 0},
	{TownHall: 0},
	{School: 0},
	{GasStation: 0},
	{StreetTilemap: 0},
	{Sidwwalk: 0},
	{OldAsphalt: 0},
	{Monorail_Rail: 0},
	{MoveTo: 0},
	{Monorail: 0},
	{MonorailStation: 0},
	{AsphaltMachine: 0},
	{Pin: 0},
	{AsphaltMachineSmoke: 0},
	{finalX: 0},
	{finalY: 0},
	{show: 0},
	{isDailyRewardGiven: 0},
	{PlayAddButton: 0},
	{Sky: 0},
	{GroundTilemap: 0},
	{GrassTilemap: 0},
	{GrassTilemap2: 0},
	{GrassTilemap3: 0},
	{FarGroundTilemap: 0},
	{Mountain1Tilemap: 0},
	{Mountain2Tilemap: 0},
	{Trees_1: 0},
	{Trees_2: 0},
	{startDistance: 0},
	{startScale: 0},
	{newScale: 0},
	{randomTile: 0}
];

self.InstanceType = {
	Camera: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	MobileAdvert: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Residential0: class extends self.ISpriteInstance {},
	Residential1: class extends self.ISpriteInstance {},
	Residential2: class extends self.ISpriteInstance {},
	Residential3: class extends self.ISpriteInstance {},
	Residential4: class extends self.ISpriteInstance {},
	Residential5: class extends self.ISpriteInstance {},
	Residential6: class extends self.ISpriteInstance {},
	TownHall: class extends self.ISpriteInstance {},
	School: class extends self.ISpriteInstance {},
	GasStation: class extends self.ISpriteInstance {},
	StreetTilemap: class extends self.ITilemapInstance {},
	Sidwwalk: class extends self.ITilemapInstance {},
	OldAsphalt: class extends self.ITiledBackgroundInstance {},
	Monorail_Rail: class extends self.ITiledBackgroundInstance {},
	Monorail: class extends self.ISpriteInstance {},
	MonorailStation: class extends self.ISpriteInstance {},
	AsphaltMachine: class extends self.ISpriteInstance {},
	AsphaltMachineSmoke: class extends self.IParticlesInstance {},
	PlayAddButton: class extends self.ISpriteInstance {},
	Sky: class extends self.ITiledBackgroundInstance {},
	GroundTilemap: class extends self.ITilemapInstance {},
	GrassTilemap: class extends self.ITilemapInstance {},
	GrassTilemap2: class extends self.ITilemapInstance {},
	GrassTilemap3: class extends self.ITilemapInstance {},
	FarGroundTilemap: class extends self.ITilemapInstance {},
	Mountain1Tilemap: class extends self.ITilemapInstance {},
	Mountain2Tilemap: class extends self.ITilemapInstance {},
	Trees_1: class extends self.ITilemapInstance {},
	Trees_2: class extends self.ITilemapInstance {}
}