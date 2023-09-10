abstract class MyAudio {
    abstract audioRecord(): void;
}

abstract class Midi {
    abstract midiTrack(): void;
}

export class MyAudioTrack extends MyAudio {
    audioRecord(): void {
        console.log('Audio is playing...');
    }
}

export class MindiTrack extends Midi {
    midiTrack(): void {
        console.log('Midi is playing...');
    }
}

export class AudioToMindiAdapter extends MyAudio {
    private midi: MindiTrack;
    
    constructor() {
        super();
        this.midi = new MindiTrack();
    }

    audioRecord(): void {
        this.midi.midiTrack();
    }
}