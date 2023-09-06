import { FlexLayout, QPlainTextEdit, QPushButton, QWidget} from "@nodegui/nodegui";
import { MyAudioTrack, AudioToMindiAdapter } from "../structural/adapter";

export class Converter extends QWidget {
    private rootViewLayout: FlexLayout;
    private buttonRowLayout: FlexLayout;
    private audioButton: QPushButton;
    private mindiButton: QPushButton;
    private buttonRow: QWidget;;
    
    constructor() {
        super();
        this.rootViewLayout = new FlexLayout();
        this.buttonRowLayout = new FlexLayout()
        this.buttonRow = new QWidget();
        this.audioButton = new QPushButton();
        this.mindiButton = new QPushButton();

        super.setObjectName("rootView");
        super.setLayout(this.rootViewLayout);
        super.setWindowTitle("convert");
        super.setFixedSize(400, 200);
  
        this.buttonRow = new QWidget();
        this.buttonRowLayout = new FlexLayout();
        this.buttonRow.setLayout(this.buttonRowLayout);
        this.buttonRow.setObjectName("buttonRow");

        this.audioButton.setText("Audio");
        this.audioButton.setObjectName("audioButton");
        this.audioButton.addEventListener('clicked', () => {
            this.playAduio();
        })
        
        this.mindiButton.setText("Mindi");
        this.mindiButton.setObjectName("midiButton");
        this.mindiButton.addEventListener('clicked', () => {
            this.playMidi();
        })

        this.buttonRowLayout.addWidget(this.audioButton);
        this.buttonRowLayout.addWidget(this.mindiButton);
        
        this.rootViewLayout.addWidget(this.buttonRow);;
        
        super.setStyleSheet(rootStyleSheet);
        super.show();
    }
    private playAduio() {
        const track = new MyAudioTrack();
        track.audioRecord();
    }

    private playMidi() {
        const track = new AudioToMindiAdapter();
        track.audioRecord();
    }
}

const rootStyleSheet = `
    #rootView {
        align-items: 'center';
        justify-content: 'center';
    }
    #audioButton {
        width: 120px;
    }
    #mindiButton {
        width: 120px;
    }
    #buttonRow{
        margin-bottom: 5px;
    }
`