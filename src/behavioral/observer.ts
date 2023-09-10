import { ContextReplacementPlugin } from "webpack";


interface ObservableInterface {
    attach(observer: Observer): void;

    detach(observer: Observer): void;

    notify(): void
}

interface Observer {
    update(subject: ObservableInterface): void;
}

export class Observable implements ObservableInterface{

    public state: number = 0;

    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);

        if(isExist) {
            return 
        }

        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if(observerIndex === -1)
            console.log('ObservableInterface: Nonexisting observer');

        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        'ObservableInterface: Notifying obsevers...';
        for(const observer of this.observers)
            observer.update(this);
    }
}

export class Compressor extends Observable implements Observer  {
    private name: string;
    private gain: number;

    constructor(name: string) {
        super()
        this.name = name;
        this.gain = 0;
    }

    public update(subject: ObservableInterface) {

    }

    public getGain(): number {
        return this.gain;
    }

    public getName(): string {
        return this.name;
    }

    public setGain(value: number): void {
        this.gain = value;
        this.notify();
    }

}

export class Kick implements Observer {
    private name: string;
    private compressor: Compressor;
    
    constructor(compressor: Compressor) {
        this.name = 'Kick';
        this.compressor = compressor;
    }

    public update(subject: ObservableInterface) {
        console.log(`Kick: subject ${this.compressor.getName()} has data: gain ${this.compressor.getGain()}`)
    }

    public getName(): string {
        return this.name;
    }
}

