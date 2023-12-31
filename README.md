# Digital-Audio-Workstation
This is implementation of a very simple digital audio workstation using 9 most popular design patterns.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

Make sure you have met the requirements listed here: https://docs.nodegui.org/docs/guides/getting-started#developer-environment

From your command line:

```bash
# Clone this repository
git clone https://github.com/nodegui/nodegui-starter
# Go into the repository
cd nodegui-starter
# Install dependencies
npm install
# Run the app
npm start
```

### Step 1: (_**Run this command only once**_)

```sh
npx nodegui-packer --init MyAppName
```

This will produce the deploy directory containing the template. You can modify this to suite your needs. Like add icons, change the name, description and add other native features or dependencies. Make sure you commit this directory.

### Step 2: (_**Run this command every time you want to build a new distributable**_)

Next you can run the pack command:

```sh
npm run build
```

This will produce the js bundle along with assets inside the `./dist` directory

```sh
npx nodegui-packer --pack ./dist
```

This will build the distributable using @nodegui/packer based on your template. The output of the command is found under the build directory. You should gitignore the build directory.

More details about packer can be found here: https://github.com/nodegui/packer

## Description
So basically, this might sound like a great project, but in fact this is just simple app, with simple interface, behavior which does not do something similar to what name says about it. This is kind of educational project, where I wanted to show how to use the most popular design pattern in action

We are gonna talk about 9 design pattern which is following:

- Singleton

- Abstract Factory

- Iterator

- Factory Method

- Observer

- Strategy

- Adapter

- Decorator

- Facade

## License

MIT
