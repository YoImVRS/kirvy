const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const crypto = require('crypto');

// Function to clear the console
function clearConsole() {
  process.stdout.write('\x1Bc');
}

// Function to set the window title
function setWindowTitle(title) {
  process.stdout.write(`\x1B]0;${title}\x07`);
}

// Function to display the banner
function showBanner() {
  const bannerContent = fs.readFileSync('banner.kirvy', { encoding: 'utf8' });
  console.log(bannerContent);
}

// Function to display a fake loading bar
function showLoadingBar() {
  const progressBarWidth = 40;
  const progressBarDelay = 150;
  const progressBarIncrement = Math.floor(100 / progressBarWidth);
  let progress = 0;
  let progressBar = '';

  const intervalId = setInterval(() => {
    progressBar += '=';
    progress += progressBarIncrement;
    clearConsole();
    showBanner();
    console.log(`Processing... [${progressBar.padEnd(progressBarWidth, ' ')}] ${progress}%`);
  }, progressBarDelay);

  setTimeout(() => {
    clearInterval(intervalId);
    clearConsole();
    showBanner();
    console.log('Kirvy finished the work!');
  }, 6000);
}

function encryptFile(filePath, outputFileName) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  let encryptedContent = cipher.update(fileContent, 'utf8', 'hex');
  encryptedContent += cipher.final('hex');

  const encryptedConfig = {
    iv: iv.toString('hex'),
    key: key.toString('hex'),
    content: encryptedContent,
  };

  const outputFilePath = outputFileName + '.kirvy';
  fs.writeFileSync(outputFilePath, JSON.stringify(encryptedConfig), 'utf8');

  showLoadingBar();
}

function decryptFile(filePath, outputFileName) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const encryptedConfig = JSON.parse(fileContent);

  const iv = Buffer.from(encryptedConfig.iv, 'hex');
  const key = Buffer.from(encryptedConfig.key, 'hex');

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  let decryptedContent = decipher.update(encryptedConfig.content, 'hex', 'utf8');
  decryptedContent += decipher.final('utf8');

  const outputFilePath = outputFileName + '.kirvydecrypted';
  fs.writeFileSync(outputFilePath, decryptedContent, 'utf8');

  showLoadingBar();
}

if (argv.help) {
  clearConsole();
  setWindowTitle('Kirvy v0.1 | github.com/ottersek');
  showBanner();
  console.log('Usage: node index.js --encrypt <file> --output <output_file>\n');
  console.log('Commands:');
  console.log('--help\t\tShow all available commands');
  console.log('--encrypt\tSpecify the Node.js script file to encrypt');
  console.log('--decrypt\tSpecify the encrypted file to decrypt');
  console.log('--output\tSpecify the output file name (without extension)');
} else if (argv.encrypt && argv.output) {
  clearConsole();
  setWindowTitle('Kirvy v0.1 | github.com/ottersek');
  showBanner();
  const filePath = argv.encrypt;
  const outputFileName = argv.output;

  encryptFile(filePath, outputFileName);
} else if (argv.decrypt && argv.output) {
  clearConsole();
  setWindowTitle('Kirvy v0.1 | github.com/ottersek');
  showBanner();
  const filePath = argv.decrypt;
  const outputFileName = argv.output;

  decryptFile(filePath, outputFileName);
} else {
  clearConsole();
  setWindowTitle('Kirvy v0.1 | github.com/ottersek');
  showBanner();
  console.log('Invalid command. Use "--help" to see the available commands.');
}
