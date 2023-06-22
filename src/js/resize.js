export const onWindowResize = () => {
  init.cameraMain.aspect =
    init.container.offsetWidth / init.container.offsetHeight;
  init.renderer.setSize(
    init.container.offsetWidth,
    init.container.offsetHeight
  );
  init.cameraMain._updateProjectionMatrix();
};
