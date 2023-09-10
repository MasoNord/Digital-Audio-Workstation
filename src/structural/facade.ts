import { QErrorMessage } from '@nodegui/nodegui';
import * as fs from 'fs';

const destinatoin = './src/files/';
const errorMessage = new QErrorMessage();

interface schema {
    process(): void;
}


class MP3 implements schema{
    private fileName: string;
    private pass: boolean;

    constructor(fileName: string, pass: boolean) {
        this.fileName = destinatoin + fileName;
        this.pass = pass;
    }
    
    public process() {
        console.log("Processing MP3...");
        
        setTimeout(() => {
            if (!fs.existsSync(this.fileName + ".mp3")) {
                fs.writeFile(this.fileName + ".mp3", "", (e) => {
                    if(e)
                        console.log(e);
                });
                console.log('Done');
            }else {
                errorMessage.showMessage("Sorry, but file with chosen name already exist");
                console.log('Failed to create mp3 file');
            }
        }, 2000);
    }
    
    public getPass(): boolean {
        return this.pass;
    }
}

class WAV implements schema{
    private fileName: string;
    private pass: boolean;

    constructor(fileName: string, pass: boolean) {
        this.fileName = destinatoin + fileName;
        this.pass = pass;
    }
    
    public process() {
        console.log("Processing wav...");
        setTimeout(() => {
            if (!fs.existsSync(this.fileName + ".wav")) {
                fs.writeFile(this.fileName + ".wav", "", (e) => {
                    if(e)
                        console.log(e);
                });
                console.log('Done');
            }else {
                errorMessage.showMessage("Sorry, but file with chosen name already exist");
                console.log('Failed to create wav file');
            }
        }, 2000);
    }

    public getPass(): boolean {
        return this.pass;
    }
}

class Data implements schema {
    private fileName: string;
    private pass: boolean;

    constructor(fileName: string, pass: boolean) {
        this.fileName = destinatoin + fileName;
        this.pass = pass;
    }
    
    public process() {
        console.log("Processing txt...");
        setTimeout(() => {
            if (!fs.existsSync(this.fileName + ".pbbd")) {
                fs.writeFile(this.fileName + ".pbbd", "", (e) => {
                    if(e)
                        console.log(e);
                });
                console.log('Done');
            }else {
                errorMessage.showMessage("Sorry, but file with chosen name already exist");
                console.log('Failed to create pbbd file');
            }
        }, 2000);
    }

    public getPass(): boolean {
        return this.pass;
    }
}

export class Render {
    private mp3: MP3;
    private wav: WAV;
    private data: Data;
    
    constructor(name: string, state1: boolean, state2: boolean, state3: boolean) {
        if (name === '' || !name)
            errorMessage.showMessage('Oops! You forgot to enter the file\'s name');
            
        this.mp3 = new MP3(name, state1);
        this.wav = new WAV(name, state2);
        this.data = new Data(name, state3);
    }

    public startRendering() {
        if (!fs.existsSync(destinatoin))
            fs.mkdirSync(destinatoin);
         
        if (this.mp3.getPass())
            this.mp3.process();
        
        if (this.wav.getPass())
            this.wav.process();
        
        if(this.data.getPass())
            this.data.process();
    }
}