module.exports = {
  files: ["./public/**/*.*", "./src/**/*.*"], // Arquivos a serem monitorados
  watchOptions: {
    ignoreInitial: true,
  },
  // Remova esta linha: server: { baseDir: "./public" },
  port: 3000, // Porta em que o Browser Sync vai rodar
  proxy: "localhost:8080", // Proxy para o Nginx
  open: false, // Não abrir automaticamente no navegador
  notify: true, // Mostrar notificações
};
