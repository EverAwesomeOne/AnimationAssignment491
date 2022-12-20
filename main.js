const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./character.png");
ASSET_MANAGER.queueDownload("./character_left.png");
ASSET_MANAGER.queueDownload("./character_down.png");
ASSET_MANAGER.queueDownload("./character_up.png");
//ASSET_MANAGER.queueDownload("./snoopy_sprite_sheet.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Character(gameEngine));
	gameEngine.addEntity(new CharacterLeft(gameEngine));
	gameEngine.addEntity(new CharacterDown(gameEngine));
	gameEngine.addEntity(new CharacterUp(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
