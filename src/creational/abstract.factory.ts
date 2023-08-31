export class EQsFactory {
    private _eqsfactory: any;
    
    constructor() {
        this._eqsfactory =[new FabFilter(5, "Pro Q"), new Waves(3, "Wave"), new UAD(4, "UAD")];
    }
}

class EQ {
    private bands: number;
    private name: string
    
    constructor(bands: number, name: string) {
        this.bands = bands;
        this.name = name;
    }

    public getBands(): number {
        return this.bands;
    }
}

class FabFilter extends EQ {
    constructor(bands: number, name: string) {
        super(bands, name);
    }

    public getBands(): number {
        return super.getBands();
    }
}

class Waves extends EQ {
    constructor(bands: number, name: string) {
        super(bands, name);
    }

    public getBands(): number {
        return super.getBands();
    }
}

class UAD extends EQ {
    constructor(bands: number, name: string) {
        super(bands, name);
    }

    public getBands(): number {
        return super.getBands();
    }
}