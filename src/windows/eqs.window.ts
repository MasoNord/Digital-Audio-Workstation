import { FlexLayout, QPushButton, QWidget} from "@nodegui/nodegui";
import { AbstractEQ, EQ, EQsFactory } from "../creational/abstract.factory";

export class Extra extends QWidget {
    private button?: QPushButton;
    private rootLayout?: FlexLayout;
    private pressed: boolean = false;
    
    constructor() {
        super();
        super.setObjectName("myroot");
        super.setFixedSize(400, 200);
        this.rootLayout = new FlexLayout();
        this.button = new QPushButton();
        super.setLayout(this.rootLayout);
        super.setWindowTitle("EQs");
        
        this.button.setText("Show EQs");
        this.button.setObjectName("button");
        this.button.addEventListener("clicked", () => {
            if(!this.pressed) {
                this.show_EQs(new EQ());
                this.pressed = true;
            }
        })

        this.rootLayout.addWidget(this.button);
        super.setStyleSheet(`
            #myroot {
                align-items: 'center';
                justify-content: 'center';
            }
        `);

        super.show();
    }


    private show_EQs(factory: EQsFactory) {
        const filters: AbstractEQ[] = factory.creatEQs();
        let button: QPushButton;
        // this.rootLayout?.removeWidget(this.button!);
        
        for (let i = 0; i < filters.length; i++) {
            button = new QPushButton();
            button.setText(filters[i].getName());
            this.rootLayout?.addWidget(button);
        }
    }
}