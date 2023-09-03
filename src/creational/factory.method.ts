abstract class MyPlugin {
    constructor(){}
    abstract getType(input: string): string;
}

class EffectPlugin extends MyPlugin {
    private type: string;
    
    constructor() {
        super();
        this.type = "Effect";
    }

    getType(type: string) {
        return type
    }
}

class SynthPlugin extends MyPlugin {
    private type: string;
    
    constructor() {
        super();
        this.type = "Synth";
    }

    getType(type: string) {
        return type
    }
}

class Creator {
    public static Factory(type: string) {
        switch(type) {
            case "Effect":
                return new EffectPlugin();
                break;
            case "Synth":
                return new SynthPlugin();
                break;
            default:
                return null;
                break;
        }
    }
}
