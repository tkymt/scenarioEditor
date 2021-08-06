

class Next {
	constructor(scene = 0, url = '') {
		this.scene = scene;
		this.url = url;
	}
}


class Actor{
	constructor(process,name,dx,dy,tags=[]){
		this.process=process;
		this.name=name;
		this.dx=dx;
		this.dy=dy;
		this.tags=tags;
	}
}

class Action{
	constructor(targets,_do){
		this.targets=targets;
		this.do=_do;
	}
}

class Do{
	constructor(name){
		this.name=name;
		if(name=='move'){
			this.x;
			this.y;
		}
	}
}

class Sound{
	constructor(name,_switch){
		this.name=name;
		this.switch=_switch;
	}
}

class ScenarioActorScene {
	constructor(actors,scenarios) {
		this.actors=actors;
		this.scenarios=scenarios;
	}
}

const scenarioActorScene = new ScenarioActorScene();