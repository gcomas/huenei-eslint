// Este es el script que se ejecutará después de instalar el paquete
console.log('Post install script is running...');

// Importar el módulo child_process dinámicamente
(async () => {
  const { exec } = await import('child_process');

  exec('npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-semistandard eslint-plugin-n eslint-plugin-oxlint eslint-plugin-promise globals standard typescript', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error ejecutando el comando: ${err}`);
      return;
    }
    console.log(`Resultado: ${stdout}`);
    console.error(`Error: ${stderr}`);
  });
})();
