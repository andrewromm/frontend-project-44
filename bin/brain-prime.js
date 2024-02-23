#!/usr/bin/env node

import playGame from '../src/index.js';
import greating from '../src/cli.js';
import primeGame from '../src/games/prime.js';

const userName = greating();
playGame(primeGame(), userName);
