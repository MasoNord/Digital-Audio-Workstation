import {FlexLayout, Key, QLabel, QPushButton, QWidget } from "@nodegui/nodegui";
import { CleanSound, KeyScape, Mellotron, VintageSound } from "../behavioral/strategy";


export class StrategyWindow extends QWidget {
    private rootLayout: FlexLayout;
    private rowButtonOneLayout: FlexLayout
    private rowButtonTwoLayout: FlexLayout
    private rowButtonThreeLayout: FlexLayout
    private rowButtonOne: QWidget;
    private rowButtonTwo: QWidget;
    private rowButtonThree: QWidget;
    private FirsLable: QLabel
    private SecondLable: QLabel 
    private ThirdLable: QLabel
    private keySpaceButton: QPushButton;
    private mellotronButton: QPushButton;
    private changeSoundButton: QPushButton;

    private cleanSound: CleanSound;
    private keyScape: KeyScape;
    private vintageSound: VintageSound;
    private mellotron: Mellotron;
    
    constructor() {
        super();
        super.setObjectName('rootLayout');
        super.setFixedSize(400, 200);
        super.setWindowTitle('Strategy');
        
        this.rowButtonOneLayout = new FlexLayout();
        this.rowButtonTwoLayout = new FlexLayout()
        this.rowButtonThreeLayout = new FlexLayout();
        this.rowButtonOne = new QWidget();
        this.rowButtonTwo = new QWidget();
        this.rowButtonThree = new QWidget();
        this.FirsLable = new QLabel();
        this.SecondLable = new QLabel(); 
        this.ThirdLable = new QLabel();
        this.keySpaceButton = new QPushButton();
        this.mellotronButton = new QPushButton();
        this.changeSoundButton = new QPushButton();

        this.cleanSound = new CleanSound();
        this.keyScape = new KeyScape(this.cleanSound);

        this.vintageSound = new VintageSound();
        this.mellotron = new Mellotron(this.vintageSound)
    
        this.rootLayout = new FlexLayout();
        super.setLayout(this.rootLayout);

        this.rowButtonOne.setObjectName('rowOne');
        this.rowButtonOne.setLayout(this.rowButtonOneLayout);

        this.rowButtonTwo.setObjectName('rowTwo');
        this.rowButtonTwo.setLayout(this.rowButtonTwoLayout);

        this.rowButtonThree.setObjectName('rowThree');
        this.rowButtonThree.setLayout(this.rowButtonThreeLayout);

        
        this.FirsLable.setText('KeySpace');
        this.keySpaceButton.setText('Play Sound');
        this.keySpaceButton.addEventListener('clicked', () => {
            this.play_keysacpe();
        });
        
        this.rowButtonOneLayout.addWidget(this.FirsLable);
        this.rowButtonOneLayout.addWidget(this.keySpaceButton);

        this.SecondLable.setText('Mellotron');
        this.mellotronButton.setText('Play Sound');
        this.mellotronButton.addEventListener('clicked', () => {
            this.play_mellotron();
        });

        this.rowButtonTwoLayout.addWidget(this.SecondLable);
        this.rowButtonTwoLayout.addWidget(this.mellotronButton);

        this.ThirdLable.setText('Change');
        this.changeSoundButton.setText('Play Sound');
        this.changeSoundButton.setObjectName('changeSound');
        this.changeSoundButton.addEventListener('clicked', () => {
            this.change_sound_system(this.mellotron, this.cleanSound);
        });

        this.rowButtonThreeLayout.addWidget(this.ThirdLable);
        this.rowButtonThreeLayout.addWidget(this.changeSoundButton);
        
        
        this.rootLayout.addWidget(this.rowButtonOne);
        this.rootLayout.addWidget(this.rowButtonTwo);
        this.rootLayout.addWidget(this.rowButtonThree);


        super.setStyleSheet(rootStyleSheet)
        super.show();

    }

    private play_keysacpe() {
        this.keyScape.getSoundSystem().sound();
    }

    private play_mellotron() {
        this.mellotron.getSoundSystem().sound();
    }

    private change_sound_system(mellotron: Mellotron, cleanSound: CleanSound) {
        mellotron.setSoundSystem(cleanSound);
        mellotron.getSoundSystem().sound();
    }
}

const rootStyleSheet = `
    #rootLayout {
        justify-content: 'center';
        flex-direction: row;
    }
    #rowOne {
        align-items: 'center';
        justify-content: 'center';
    }

    #rowTwo {
        align-items: 'center';
        justify-content: 'center';
    }

    #rowThree {
        align-items: 'center';
        justify-content: 'center';
    }

`