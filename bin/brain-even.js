#!/usr/bin/env node

import greating from '../src/cli.js';
import evenGame from '../src/even.js';

const userName = greating();
evenGame(userName);
