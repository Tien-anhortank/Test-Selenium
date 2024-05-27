const { exec } = require('child_process');
const path = require('path');
const util = require('util');

const execPromise = util.promisify(exec);

describe('Selenium IDE Tests', () => {
  it('should run .side file', async () => {
    const sideFilePath = path.resolve(__dirname, 'uat_2.0.side');
    try {
      const { stdout, stderr } = await execPromise(`selenium-side-runner "${sideFilePath}"`);
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    } catch (error) {
      console.error(`exec error: ${error}`);
      throw error;
    }
  }, 60000); // Increase timeout to 60 seconds
});
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, 3000));
}
afterAll(() => {
  setTimeout(() => process.exit(), 1000);
});
