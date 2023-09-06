import { FlexLayout, QCheckBox, QLabel, QLineEdit, QPlainTextEdit, QPushButton, QWidget } from "@nodegui/nodegui";
import { Creator} from "../creational/factory.method";

export class Footer extends QWidget {
    private rootViewLayout: FlexLayout;
    private buttonRowLayout: FlexLayout;
    private fieldsetLayout: FlexLayout;
    private numsCharsRowLayout: FlexLayout;
    
    private fieldset: QWidget;
    private numsCharsRow: QWidget;
    private buttonRow: QWidget;
    
    private numsCharsLabel: QLabel;
    private numsCharsInput: QLineEdit;
    // Handle app's output
    private passOutput: QPlainTextEdit;
    
    private getFootersButton: QPushButton;
    
    constructor() {
        super();
        this.rootViewLayout = new FlexLayout();
        this.fieldsetLayout = new FlexLayout();
        this.numsCharsRowLayout = new FlexLayout();
        this.buttonRowLayout = new FlexLayout();

        this.fieldset = new QWidget();
        this.numsCharsRow = new QWidget();
        this.buttonRow = new QWidget();
        
        this.numsCharsLabel = new QLabel();
        this.numsCharsInput = new QLineEdit();
        this.passOutput = new QPlainTextEdit();

        this.getFootersButton = new QPushButton();

        super.setObjectName("rootView");
        super.setLayout(this.rootViewLayout);
        super.setWindowTitle("Footer bar")

        this.fieldset.setObjectName('fieldset');
        this.fieldset.setLayout(this.fieldsetLayout);

        this.numsCharsRow.setObjectName('numsCharsRow');
        this.numsCharsRow.setLayout(this.numsCharsRowLayout);

        this.numsCharsLabel.setText("Enter plugin's name:");
        this.numsCharsRowLayout.addWidget(this.numsCharsLabel);

        this.numsCharsInput.setObjectName('numsCharsInput');
        this.numsCharsRowLayout.addWidget(this.numsCharsInput);

        this.fieldsetLayout.addWidget(this.numsCharsRow);
        this.rootViewLayout.addWidget(this.fieldset);

        this.passOutput.setObjectName('passOutput');
        this.passOutput.setReadOnly(true);
        this.passOutput.setWordWrapMode(3);
        this.rootViewLayout.addWidget(this.passOutput);

        this.buttonRow.setLayout(this.buttonRowLayout);
        this.buttonRow.setObjectName('buttonRow');
        
        this.getFootersButton.setText('Drag plugin here');
        this.getFootersButton.setObjectName('footersbutton')
        this.getFootersButton.addEventListener('clicked', () => {
            this.show_plugins();
        });
        
        
        this.buttonRowLayout.addWidget(this.getFootersButton);
        this.rootViewLayout.addWidget(this.buttonRow);

        super.setStyleSheet(rootStyleSheet);
        super.show();
    }

    private show_plugins() {
        const drop: string | null = this.numsCharsInput.text();
        const effect: any = Creator.Factory(drop);
        
        if(effect)
            this.passOutput.setPlainText(`
                You dropped: ${effect.getType()} 
            `)
        else
            this.passOutput.setPlainText(`
                Oops, something went wrong
            `)    
    }

}

const rootStyleSheet = `
    #rootView {
        padding: 5px;
    }
    #fieldset {
        padding: 10px;
        border: 2px ridge #bdbdbd;
        margin-bottom: 4px;
    }
    #numsCharsRow {
        flex-direction: row;
    }
    #numsCharsRow {
        margin-bottom: 5px;
    }
    #numsCharsInput {
        width: 100px;
        margin-left: 2px;
    }
    #passOutput {
        height: 85px;
        margin-bottom: 4px;
    }
    #buttonRow{
        margin-bottom: 5px;
    }
    #footersbutton {
        width: 120px;
        margin-right: 3px;
    } 
`;