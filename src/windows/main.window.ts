import {QMainWindow, QPushButton, QWidget, FlexLayout} from '@nodegui/nodegui';
import { Extra } from './eqs.window';

export class MainWindow extends QMainWindow{
    private static _instance: MainWindow;
    private static centralWidget: QWidget;
    
    private rootLayout?: FlexLayout;
    private button?: QPushButton;
    private extraWindow?: Extra;

    constructor() {
        super();
        
        if(!!MainWindow._instance) {
            return MainWindow._instance;
        }
        MainWindow._instance = this;
        
        this.rootLayout = new FlexLayout();
        MainWindow.centralWidget = new QWidget();
        this.button = new QPushButton();

        MainWindow.centralWidget.setObjectName("myroot");
        MainWindow.centralWidget.setLayout(this.rootLayout);
              
        this.button.setText("Open eqs window")
        this.button.setObjectName("button");
        this.button.addEventListener("clicked", () => {
            this.create_window_eqs();
        })

        this.rootLayout.addWidget(this.button);
        super.setCentralWidget(MainWindow.centralWidget);
        super.setStyleSheet(`
            #myroot {
                align-items: 'center';
                justify-content: 'center';
            }
        `);

        return this;
    }
    private create_window_eqs() {
        this.extraWindow = new Extra();
    }
}