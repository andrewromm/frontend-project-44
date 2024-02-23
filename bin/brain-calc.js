#!/usr/bin/env node

import playGame from '../src/index.js';
import greating from '../src/cli.js';
import calcGame from '../src/games/calc.js';

const userName = greating();
playGame(calcGame(), userName);
