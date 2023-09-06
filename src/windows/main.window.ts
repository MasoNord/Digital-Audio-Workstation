import {QMainWindow, QPushButton, QWidget, FlexLayout} from '@nodegui/nodegui';
import { Extra } from './eqs.window';
import { Footer } from './footer.window';
import { Converter } from './converter.window';

export class MainWindow extends QMainWindow{
    private static _instance: MainWindow;
    private static centralWidget: QWidget;
    
    private rootLayout?: FlexLayout;
    private eqsButton?: QPushButton;
    private pluginButton?: QPushButton;
    private converterButton?: QPushButton;
    private extraWindow?: Extra;
    private footerWindow?: Footer;
    private converter?: Converter;

    constructor() {
        super();
        
        if(!!MainWindow._instance) {
            return MainWindow._instance;
        }
        MainWindow._instance = this;
        
        MainWindow.centralWidget = new QWidget();
        this.rootLayout = new FlexLayout();
        this.eqsButton = new QPushButton();
        this.pluginButton = new QPushButton();
        this.converterButton = new QPushButton();

        MainWindow.centralWidget.setObjectName("myroot");
        MainWindow.centralWidget.setLayout(this.rootLayout);
              
        this.eqsButton.setText("Open eqs window")
        this.eqsButton.addEventListener("clicked", () => {
            this.create_window_eqs();
        })

        this.pluginButton.setText("Open footer");
        this.pluginButton.addEventListener("clicked", () => {
            this.create_window_plugin();
        })

        this.converterButton.setText("Converter");
        this.converterButton.addEventListener('clicked', () => {
            this.open_converte_window();
        })

        this.rootLayout.addWidget(this.eqsButton);
        this.rootLayout.addWidget(this.pluginButton);
        this.rootLayout.addWidget(this.converterButton);
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
    private open_converte_window() {
        this.converter = new Converter();
    }
}