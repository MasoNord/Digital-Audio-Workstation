import {FlexLayout, QCheckBox, QLineEdit, QPushButton, QWidget } from "@nodegui/nodegui";
import { Render } from "../structural/facade";


export class RenderWindow extends QWidget{
    private rootLayout: FlexLayout;
    private fieldset: QWidget;
    private fieldsetLayout: FlexLayout;
    private mp3CheckBox: QCheckBox;
    private wavCheckBox: QCheckBox;
    private dataCheckBox: QCheckBox;
    private charsInput: QLineEdit;
    private convertButton: QPushButton;
    private buttonRow: QWidget;
    private buttonRowLayout: FlexLayout;

    constructor() {
        super();
        
        this.rootLayout = new FlexLayout();
        this.fieldsetLayout = new FlexLayout();
        this.buttonRowLayout = new FlexLayout();
        this.fieldset = new QWidget();
        this.buttonRow = new QWidget();
        this.dataCheckBox = new QCheckBox();
        this.mp3CheckBox = new QCheckBox();
        this.wavCheckBox = new QCheckBox();
        this.charsInput = new QLineEdit();
        this.convertButton = new QPushButton();

        
        super.setLayout(this.rootLayout);
        super.setObjectName('rootView');
        super.setWindowTitle('Rendering');
        super.setFixedSize(400, 200);

        this.fieldset.setObjectName('fieldset');
        this.fieldset.setLayout(this.fieldsetLayout);

        this.charsInput.setObjectName('input');
        this.fieldsetLayout.addWidget(this.charsInput);

        this.mp3CheckBox.setText('mp3');
        this.wavCheckBox.setText('wav');
        this.dataCheckBox.setText('data');

        this.fieldsetLayout.addWidget(this.mp3CheckBox);
        this.fieldsetLayout.addWidget(this.wavCheckBox);
        this.fieldsetLayout.addWidget(this.dataCheckBox);

        this.buttonRow.setObjectName('buttonRow');
        this.buttonRow.setLayout(this.buttonRowLayout);

        this.convertButton.setText('Convert');
        this.convertButton.setObjectName('button');
        this.convertButton.addEventListener('clicked', () => {
            this.render_file();
        });

        this.buttonRowLayout.addWidget(this.convertButton);
        
        this.rootLayout.addWidget(this.fieldset);
        this.rootLayout.addWidget(this.buttonRow);

        super.setStyleSheet(rootStyleSheet);
        super.show();
    }

    private render_file() {        
        const state1: boolean = this.mp3CheckBox.isChecked();
        const state2: boolean = this.wavCheckBox.isChecked();
        const state3: boolean = this.dataCheckBox.isChecked();
        const name: string = this.charsInput.text();

        const render = new Render(name, state1, state2, state3);
        render.startRendering();
    }
}

const rootStyleSheet = `

    #rootView {
        align-items: 'center';
        justify-content: 'center';
        padding: 10px;
        border: 2px ridge #bdbdbd;
        margin-bottom: 4px;
    }
    #fieldset {
        align-items: 'center';
        justify-content: 'center'; 
        flex-direction: row;
    }
    #buttonRow {
        align-items: 'center';
        justify-content: 'center';
        margin-bottom: 10px
    }

`