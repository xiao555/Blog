require("babel-register")({
  presets: [
    "es2015",
    "stage-0"
  ],
  plugins: ["transform-async-to-generator","transform-runtime"]
});

require('./api');
