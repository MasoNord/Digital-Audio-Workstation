import { FlexLayout, QCheckBox, QPlainTextEdit, QWidget} from "@nodegui/nodegui";
import { Compressor, EQDecorator, SourceEntity } from "../structural/decorator";

export class DecoratorWindow extends QWidget {
    private rootViewLayout: FlexLayout;
    private eqDecorator: QCheckBox;
    private compressDecorator: QCheckBox;
    private passOutput: QPlainTextEdit;
    private checkBox: QWidget;
    private checkBoxLayout: FlexLayout;

    private dry: SourceEntity;
    
    
    constructor() {
        super();
        this.rootViewLayout = new FlexLayout();
        this.eqDecorator = new QCheckBox();
        this.compressDecorator = new QCheckBox();
        this.passOutput = new QPlainTextEdit();
        this.checkBox = new QWidget();
        this.checkBoxLayout = new FlexLayout();

        this.dry = new SourceEntity("sound");

        super.setObjectName('rootView');
        super.setLayout(this.rootViewLayout);
        super.setWindowTitle("Decorator");
        super.setFixedSize(400, 200);

        this.checkBox.setLayout(this.checkBoxLayout);
        this.checkBox.setObjectName('checkBox');

        this.compressDecorator.setText("Compress");
        this.compressDecorator.addEventListener("clicked", () => {
            this.result();
        });

        this.eqDecorator.setText("Eq");
        this.eqDecorator.addEventListener('clicked', () => {
            this.result();
        });
        this.passOutput.setObjectName("passOutput");
        this.passOutput.setReadOnly(true);
        this.passOutput.setWordWrapMode(3);
        this.passOutput.setPlainText(this.dry.play());

        this.checkBoxLayout.addWidget(this.eqDecorator)
        this.checkBoxLayout.addWidget(this.compressDecorator)

        this.rootViewLayout.addWidget(this.passOutput);
        this.rootViewLayout.addWidget(this.checkBox);

        super.setStyleSheet(rootStyleSheet);
        super.show();

    }

    private result() {
        if (this.compressDecorator.isChecked() && !this.eqDecorator.isChecked()) {
            const wet = new Compressor(this.dry);
            this.passOutput.setPlainText(wet.play());
        }
        else if(!this.compressDecorator.isChecked() && this.eqDecorator.isChecked()) {
            const wet = new EQDecorator(this.dry);
            this.passOutput.setPlainText(wet.play());
        }
        else if(this.compressDecorator.isChecked() && this.eqDecorator.isChecked()) {
            const wet = new EQDecorator(new Compressor(this.dry));
            this.passOutput.setPlainText(wet.play());
        }
        else {
            this.passOutput.setPlainText(this.dry.play());
        }
    }
}



const rootStyleSheet = `
    #rootView {
        align-items: 'center';
        justify-content: 'center';
    }
    #passOutput {
        height: 25px;
        width: 180px;
        text-align: center
    }
`
