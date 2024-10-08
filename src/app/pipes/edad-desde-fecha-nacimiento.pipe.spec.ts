import { EdadDesdeFechaNacimientoPipe } from './edad-desde-fecha-nacimiento.pipe';

describe('EdadDesdeFechaNacimientoPipe', () => {
  it('create an instance', () => {
    const pipe = new EdadDesdeFechaNacimientoPipe();
    expect(pipe).toBeTruthy();
  });
  describe('Dada una fecha de nacimiento...', () => {
    it('comprobar que se obtiene la edad', () => {
      const fechaActualMenos41 = new Date().getFullYear()-41;
      const fechaNacimiento = new Date(fechaActualMenos41, 1, 1);
      const pipe = new EdadDesdeFechaNacimientoPipe;
      const edad = pipe.transform(fechaNacimiento);

      expect(edad).toBe(41);
    });
  });
});
