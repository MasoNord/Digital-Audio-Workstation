interface Source {
    play(): string
}

export class SourceEntity implements Source {
    private sound: string;
    
    constructor(sound: string) {
        this.sound = sound;
    }
    
    public play() {
        return this.sound;
    }
}

class Decorator implements Source {
    protected source: Source;
    
    constructor(source: Source) {
        this.source = source;
    }

    public play(): string {
        return this.source.play();
    }
}

export class EQDecorator extends Decorator {
    public play(): string {
        return `EQ[${super.play()}]`
    }
}

export class Compressor extends Decorator {
    public play(): string {
        return `Compress[${super.play()}]`;
    }
}
