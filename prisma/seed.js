const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const commander = await prisma.commander.upsert({
      where: { name: 'Alumno1' },
      update: {},
      create: {
        name: 'Alumno1',
		username: 'junionew',
        mainstack: 'Node.js'
      },
    });

    const commander1 = await prisma.commander.upsert({
      where: { name: 'Alumno2' },
      update: {},
      create: {
        name: 'Alumno2',
		username: 'junionew2',
        mainstack: 'Node.js'
      },
    });

    console.log('Create 2 new users');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();