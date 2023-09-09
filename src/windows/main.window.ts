import {QMainWindow, QPushButton, QWidget, FlexLayout} from '@nodegui/nodegui';
import { Extra } from './eqs.window';
import { Footer } from './footer.window';
import { Converter } from './converter.window';
import { DecoratorWindow } from './decorator.window';
import { RenderWindow } from './render.window';
import { IteratorWindow } from './iterator.windwo';

export class MainWindow extends QMainWindow{
    private static _instance: MainWindow;
    private static centralWidget: QWidget;
    
    private rootLayout?: FlexLayout;
    private eqsButton?: QPushButton;
    private pluginButton?: QPushButton;
    private converterButton?: QPushButton;
    private decoratorButton?: QPushButton;
    private renderButton?: QPushButton;
    private iteratorButton?: QPushButton;
    
    private extraWindow?: Extra;
    private footerWindow?: Footer;
    private converter?: Converter;
    private decorator?: DecoratorWindow;
    private render?: RenderWindow;
    private iteratorWindow?: IteratorWindow; 

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
        this.decoratorButton = new QPushButton();
        this.renderButton = new QPushButton();
        this.iteratorButton = new QPushButton();

        MainWindow.centralWidget.setObjectName("myroot");
        MainWindow.centralWidget.setLayout(this.rootLayout);
              
        this.eqsButton.setText("Open eqs window")
        this.eqsButton.addEventListener("clicked", () => {
            this.open_eqs_window();
        });

        this.pluginButton.setText("Open footer");
        this.pluginButton.addEventListener("clicked", () => {
            this.open_window_plugin();
        });

        this.converterButton.setText("Converter");
        this.converterButton.addEventListener('clicked', () => {
            this.open_converte_window();
        });

        this.decoratorButton.setText("Decoretor");
        this.decoratorButton.addEventListener('clicked', () => {
            this.open_decorator_window();
        });

        this.renderButton.setText("Render");
        this.renderButton.addEventListener("clicked", () => {
            this.open_render_window();
        });

        this.iteratorButton.setText('Iterator');
        this.iteratorButton.addEventListener('clicked', () => {
            this.open_iterator_window();
        })

        this.rootLayout.addWidget(this.eqsButton);
        this.rootLayout.addWidget(this.pluginButton);
        this.rootLayout.addWidget(this.converterButton);
        this.rootLayout.addWidget(this.decoratorButton);
        this.rootLayout.addWidget(this.renderButton);
        this.rootLayout.addWidget(this.iteratorButton);

        super.setCentralWidget(MainWindow.centralWidget);
        super.setStyleSheet(`
            #myroot {
                align-items: 'center';
                justify-content: 'center';
            }
        `);

        return this;
    }
    private open_eqs_window() {
        this.extraWindow = new Extra();
    }
    private open_window_plugin() {
        this.footerWindow = new Footer();
    }
    private open_converte_window() {
        this.converter = new Converter();
    }
    private open_decorator_window() {
        this.decorator = new DecoratorWindow();
    }
    private open_render_window() {
        this.render = new RenderWindow();
    }
    private open_iterator_window() {
        this.iteratorWindow = new IteratorWindow();
    }
}