import { FlexLayout, QLabel, QLineEdit, QPlainTextEdit, QWidget } from "@nodegui/nodegui";
import { Data } from "../behavioral/iterator";


export class IteratorWindow extends QWidget {
    private rootLayout: FlexLayout;
    private charsInput: QLineEdit;
    private charsRow: QWidget;
    private charsRowLayout: FlexLayout;
    private fieldset: QWidget;
    private fieldsetLayout: FlexLayout;
    private passOuput: QPlainTextEdit;
    private textLable: QLabel;
    private data: Data<string>;
    
    constructor() {
        super();
        
        this.rootLayout = new FlexLayout();
        this.charsRowLayout = new FlexLayout();
        this.charsInput = new QLineEdit();
        this.fieldset = new QWidget();
        this.charsRow = new QWidget();
        this.fieldsetLayout = new FlexLayout();
        this.passOuput = new QPlainTextEdit();
        this.charsRow = new QWidget();
        this.charsRowLayout = new FlexLayout();
        this.textLable = new QLabel();

        this.data = new Data(['redhat', 'hilarious', '808', 'ambulance', 'empty']);
        
        this.rootLayout.setObjectName('rootLayout');
        
        super.setWindowTitle("Iterator");
        super.setFixedSize(400, 200);
        super.setLayout(this.rootLayout);
        

        this.fieldset.setObjectName('fieldset');
        this.fieldset.setLayout(this.fieldsetLayout);

        this.charsRow.setObjectName('charsRow');
        this.charsRow.setLayout(this.charsRowLayout);
        
        this.textLable.setText('Enter desired word: ');
        this.charsRowLayout.addWidget(this.textLable);

        this.charsInput.setObjectName('input');
        this.charsInput.addEventListener('textEdited', () => {
            this.parse();
        })
        this.charsRowLayout.addWidget(this.charsInput);
        

        this.passOuput.setObjectName('output');
        this.passOuput.setReadOnly(true);
        this.passOuput.setWordWrapMode(3);
        this.fieldsetLayout.addWidget(this.passOuput);


        this.rootLayout.addWidget(this.charsRow);
        this.rootLayout.addWidget(this.fieldset);

        super.setStyleSheet(rootStyleSheet);
        super.show();
    }

    private parse() {
        this.passOuput.clear();

        let char: string = this.charsInput.text();
        let data: string = "";
        let iterator = this.data.getIterator();

        while (iterator.hasNext()) {
            if (iterator.next().includes(char))
                data += char;
            if (char === ' ' || !char)
                return

            console.log(data);
        }
        
        this.passOuput.clear();

        this.passOuput.setPlainText(data);
    }
}

const rootStyleSheet = `
    #rootLayout {
        padding: 5px;
    }
    #charsRow {
        align-items: 'center';
        justify-content: 'center'; 
        flex-direction: row;
        padding: 10px;
        border: 2px ridge #bdbdbd;
        margin-bottom: 4px
    }
    #fieldset {

        justify-content: 'center';
    }
    #output {
        height: 85px;
        margin-bottom: 4px;
    }
    #input {
        margin-right: 10px
    }
`