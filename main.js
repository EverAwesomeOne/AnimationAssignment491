const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./character_right.png");
ASSET_MANAGER.queueDownload("./character_left.png");
ASSET_MANAGER.queueDownload("./character_down.png");
ASSET_MANAGER.queueDownload("./character_up.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new CharacterRight(gameEngine));
	gameEngine.addEntity(new CharacterLeft(gameEngine));
	gameEngine.addEntity(new CharacterDown(gameEngine));
	gameEngine.addEntity(new CharacterUp(gameEngine));
	gameEngine.addEntity(new CharacterLeftToRight(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
