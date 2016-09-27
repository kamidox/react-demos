# [Thinking in React](http://facebook.github.io/react/docs/thinking-in-react.html)

## Step 1: Break the UI into a component hierarchy
## Step 2: Build a static version in React
## Step 3: Identify the minimal (but complete) representation of UI state
## Step 4: Identify where your state should live
## Step 5: Add inverse data flow

## Run this example in precompile mode

* Install babel-cli: `npm install -g babel-cli`
* Change to this dir: `cd thinking-in-react`
* Install babel preset react: `npm install babel-preset-react`
* Convert JSX to js automatically: `babel -w src -d build --presets react`

## Debug JSX in Chrome

Chrome do not load jsx (type=text/babel) when jsx is serve in local file system. We can run simple http server on the working directory by following command:

```shell
cd working-directory
python -m SimpleHTTPServer
```
