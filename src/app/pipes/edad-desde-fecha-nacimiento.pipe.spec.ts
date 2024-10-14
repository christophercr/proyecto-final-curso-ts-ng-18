import { EdadDesdeFechaNacimientoPipe } from './edad-desde-fecha-nacimiento.pipe';

fdescribe('EdadDesdeFechaNacimientoPipe', () => {
  it('create an instance', () => {
    const pipe = new EdadDesdeFechaNacimientoPipe();
    expect(pipe).toBeTruthy();
  });
  describe('Dada una fecha de nacimiento...', () => {
    it('comprobar que se obtiene la edad desde una fecha', () => {
      const fechaActualMenos41 = new Date().getFullYear()-41;
      const fechaNacimiento = new Date(fechaActualMenos41, 1, 1);
      const pipe = new EdadDesdeFechaNacimientoPipe;
      const edad = pipe.transform(fechaNacimiento);

      expect(edad).toBe(41);
    });
    it('comprobar que ante una fecha mayor que la actual funciona correctamente y devuelve 0', () => {
      const fechaActualMas10 = new Date().getFullYear()+10;
      const fechaFutura = new Date(fechaActualMas10, 1, 1);

      const pipe = new EdadDesdeFechaNacimientoPipe;
      const edad = pipe.transform(fechaFutura);

      expect(edad).toBe(0);
    });
  });
});
