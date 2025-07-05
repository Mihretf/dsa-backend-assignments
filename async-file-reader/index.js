const fs = require('fs/promises');

async function readFiles() {
  try {
    const files = ['a.txt', 'b.txt', 'c.txt'];
    let totalLength = 0;

    for (const file of files) {
      const content = await fs.readFile(file, 'utf8');
      console.log(`Content of ${file}:`);
      console.log(content);
      console.log('---');
      totalLength += content.length;
    }

    console.log(`Total length: ${totalLength}`);
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

readFiles();
