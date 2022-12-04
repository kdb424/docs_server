import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';
import path from 'path';

const options: Partial<SimpleGitOptions> = {
  baseDir: path.join(process.cwd(), "git_repo"),
  binary: 'git',
  maxConcurrentProcesses: 6,
  trimmed: false,
};

// when setting all options in a single object
const git: SimpleGit = simpleGit(options);
export default git;