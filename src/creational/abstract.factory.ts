export interface EQsFactory {
    creatEQs(): AbstractEQ[];
}

export interface AbstractEQ {
    bands: number;
    name: string;
    getBands(): number;
    getName(): string;
}

export class EQ implements EQsFactory {
    public creatEQs(): AbstractEQ[] {
        return [new FabFilter(5, "Pro Q"), new Waves(3, "Wave"), new UAD(4, "UAD")]
    }
}

class FabFilter implements AbstractEQ{
    bands: number;
    name: string;

    constructor(bands: number, name: string) {
        this.name = name;
        this.bands = bands;
    }

    public getBands(): number {
        return this.bands;
    }

    public getName(): string {
        return this.name;
    }
}

class Waves implements AbstractEQ {
    bands: number;
    name: string;

    constructor(bands: number, name: string) {
        this.name = name;
        this.bands = bands;
    }

    public getBands(): number {
        return this.bands;
    }

    public getName(): string {
        return this.name;
    }
}

class UAD implements AbstractEQ {
    bands: number;
    name: string;

    constructor(bands: number, name: string) {
        this.name = name;
        this.bands = bands;
    }

    public getBands(): number {
        return this.bands;
    }

    public getName(): string {
        return this.name;
    }
}