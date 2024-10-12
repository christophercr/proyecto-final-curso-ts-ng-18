import { EdadDesdeFechaNacimientoPipe } from './edad-desde-fecha-nacimiento.pipe';

describe('EdadDesdeFechaNacimientoPipe', () => {
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
    it('comprobar que se obtiene la edad desde un string', () => {
      const fechaOrigenString:any = "2012-04-10";
      const fechaOrigenTime = Date.parse(fechaOrigenString);
      const fechaOrigenDate = new Date(fechaOrigenTime);

      const pipe = new EdadDesdeFechaNacimientoPipe;
      const edad = pipe.transform(fechaOrigenDate);

      expect(edad).toBe(12);
    });
  });
});
