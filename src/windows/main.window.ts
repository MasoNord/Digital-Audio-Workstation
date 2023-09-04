import {QMainWindow, QPushButton, QWidget, FlexLayout} from '@nodegui/nodegui';
import { Extra } from './eqs.window';
import { Footer } from './footer.window';

export class MainWindow extends QMainWindow{
    private static _instance: MainWindow;
    private static centralWidget: QWidget;
    
    private rootLayout?: FlexLayout;
    private eqsButton?: QPushButton;
    private pluginButton?: QPushButton;
    private extraWindow?: Extra;
    private footerWindow?: Footer;

    constructor() {
        super();
        
        if(!!MainWindow._instance) {
            return MainWindow._instance;
        }
        MainWindow._instance = this;
        
        this.rootLayout = new FlexLayout();
        MainWindow.centralWidget = new QWidget();
        this.eqsButton = new QPushButton();
        this.pluginButton = new QPushButton();

        MainWindow.centralWidget.setObjectName("myroot");
        MainWindow.centralWidget.setLayout(this.rootLayout);
              
        this.eqsButton.setText("Open eqs window")
        this.eqsButton.setObjectName("eqsButton");
        this.eqsButton.addEventListener("clicked", () => {
            this.create_window_eqs();
        })

        this.pluginButton.setText("Open footer");
        this.pluginButton.setObjectName("pluginButton");
        this.pluginButton.addEventListener("clicked", () => {
            this.create_window_plugin();
        })

        this.rootLayout.addWidget(this.eqsButton);
        this.rootLayout.addWidget(this.pluginButton);
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
    private create_window_plugin() {
        this.footerWindow = new Footer();
    }
}