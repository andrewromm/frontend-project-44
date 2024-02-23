#!/usr/bin/env node

import playGame from '../src/index.js';
import greating from '../src/cli.js';
import gcdGame from '../src/games/gcd.js';

const userName = greating();
playGame(gcdGame(), userName);
