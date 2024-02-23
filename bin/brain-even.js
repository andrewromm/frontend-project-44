#!/usr/bin/env node

import playGame from '../src/index.js';
import greating from '../src/cli.js';
import evenGame from '../src/games/even.js';

const userName = greating();
playGame(evenGame(), userName);
