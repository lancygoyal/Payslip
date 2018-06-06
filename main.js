/* ---------------------------------------------------------------------------------
   * @ description : This is the main startup server file to configure the application.
---------------------------------------------------------------------------------- */

import 'babel-polyfill';
import 'babel-core/register';
import configureServer from './server';

// creating REST API server connection.
configureServer();
