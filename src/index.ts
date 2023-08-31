import { MainWindow } from './main.window';

function main() {
  const win = new MainWindow();
  win.setWindowTitle("Hello World");
  win.setFixedSize(700, 500);
  win.show();

  (global as any).win = win;
}

main();




