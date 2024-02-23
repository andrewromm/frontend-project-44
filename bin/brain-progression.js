#!/usr/bin/env node

import playGame from '../src/index.js';
import greating from '../src/cli.js';
import progressionGame from '../src/games/progression.js';

const userName = greating();
playGame(progressionGame(), userName);
