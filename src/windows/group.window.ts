import { FlexLayout, Orientation, QLabel, QProgressBar, QProgressDialog, QScrollBar, QSlider, QWidget, QWindow } from "@nodegui/nodegui";
import { Compressor } from "../behavioral/observer";
import { Kick } from "../behavioral/observer";

export class GroupWindow extends QWidget {
    private rootLayout: FlexLayout;
    private barRowLayout: FlexLayout;
    private progressBar: QSlider
    private barRow: QWidget;
    private textLable: QLabel;

    private compressor: Compressor;
    private kick: Kick;
    
    constructor() {
        super();
        super.setFixedSize(400, 200);
        super.setWindowTitle('Group');
        
        this.rootLayout = new FlexLayout();
        this.rootLayout.setObjectName('rootLayout');
        super.setLayout(this.rootLayout);

        this.barRow = new QWidget();
        this.barRowLayout = new FlexLayout();
        this.progressBar = new QSlider();
        this.textLable = new QLabel();

        this.compressor = new Compressor('Compressor');
        this.kick = new Kick(this.compressor);

        this.barRow.setObjectName('barRow');
        this.barRow.setLayout(this.barRowLayout);
        
        this.textLable.setText('Current Gain of the Kick: 0');
        this.barRowLayout.addWidget(this.textLable);

        this.progressBar.setObjectName('progressBar');
        this.progressBar.setRange(0, 100);
        this.progressBar.setOrientation(Orientation.Horizontal);
        this.progressBar.addEventListener('sliderMoved', () => {
            this.textLable.setText(`Current Gain of the Kick: ${this.progressBar.value()}`);
            this.change_gain(this.progressBar.value());
        })
        this.barRowLayout.addWidget(this.progressBar);

        this.rootLayout.addWidget(this.barRow);

        super.setStyleSheet(RootStyleSheet);
        super.show();
    }

    private change_gain(gain: number) {
        this.compressor.attach(this.kick);
        this.compressor.setGain(gain);
    }
}

const RootStyleSheet = `
    #rootLayout {
        align-items: 'center';
        justify-content: 'center';
    }

    #barRow {
        align-items: 'center';
        justify-content: 'center';
    }


`