/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackCongfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment..'))

webpack(webpackCongfig).run((err, stats) => {
  if (err) { //so a fatal error occurred. Stop here.
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings){
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warnings => console.log(chalk.yellow(warnings)));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded
  console.log(chalk.green('Your app has been built for production and has been written to /dist!'));

  return 0;
});