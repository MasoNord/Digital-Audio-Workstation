
abstract class Sound {
    abstract sound(): void;
}

export class CleanSound extends Sound {
    public sound() {
        console.log('Clean sound');
    }
}

export class VintageSound extends Sound {
    public sound() {
        console.log('Vintage sound');
    }
}

abstract class Synth {
    private soundSystem: CleanSound | VintageSound;
    
    constructor(soundSystem: CleanSound | VintageSound) {
        this.soundSystem = soundSystem;
    }

    getSoundSystem() {
        return this.soundSystem;
    }

    setSoundSystem(Synth: CleanSound | VintageSound) {
        this.soundSystem = Synth;
    }
}

export class KeyScape extends Synth {
    private cleanSound: CleanSound;

    constructor(cleanSound: CleanSound) {
        super(cleanSound);
        this.cleanSound = cleanSound; 
    }
}

export class Mellotron extends Synth {
    private cleanSound: CleanSound;

    constructor(vintageSound: VintageSound) {
        super(vintageSound);
        this.cleanSound = vintageSound;
    }
}


