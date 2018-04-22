/* This script generates mock data for local development
This means that you don't need an actual API end point for testing
Rapid page loading due to local static data */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err){
  if(err){
    return console.log(chalk.red(err))
  }else{
    console.log(chalk.green("Mock data generated."))
  }
});