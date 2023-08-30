import {QMainWindow} from '@nodegui/nodegui';

export class MainWindow extends QMainWindow{
    protected static _instance: MainWindow;

    constructor() {
        super();
        if(!!MainWindow._instance) {
            return MainWindow._instance;
        }

        MainWindow._instance = this;

        return this;
    }
}
