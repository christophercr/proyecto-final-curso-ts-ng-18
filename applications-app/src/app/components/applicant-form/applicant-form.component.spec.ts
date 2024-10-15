import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantFormComponent} from './applicant-form.component';
import { ApplicationsService } from '../../services/applications.service';
import { provideAnimations } from '@angular/platform-browser/animations';


describe('Suite of tests on applicant-form.component (applicantForm)', () => {
  let component: ApplicantFormComponent;
  let fixture: ComponentFixture<ApplicantFormComponent>;
  let applicationService: jasmine.SpyObj<ApplicationsService>;

  beforeEach(async () => {
    const applicationServiceMock = jasmine.createSpyObj('applicationService', ['createApplicant']);

    await TestBed.configureTestingModule({
      imports: [ApplicantFormComponent],
      providers: [
        {
          provide: ApplicationsService, provideAnimations,
          useValue: applicationServiceMock,
          
        },
      ],
    }).compileComponents();

    applicationService = TestBed.inject(ApplicationsService) as jasmine.SpyObj<ApplicationsService>;
    fixture = TestBed.createComponent(ApplicantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('inputs:', () => {
    describe('dado el input "name"', () => {
      it('The input box must show a given name', () => {
        component.applicantForm.controls.name.setValue('Cunchis Doe');
        const compiledHtml = fixture.nativeElement as HTMLElement;
        const inputBox = compiledHtml.querySelector('[data-test="field-collection-name"]') as HTMLInputElement;
        expect(inputBox.value).toBe('Cunchis Doe');
      });
    });
  });

//   describe('sendApplicantForm', () => {
//     it('It must emit an event when the button "Enviar" is cliked', (done: DoneFn) => {
//       applicationService.createApplicant.and.returnValue(
//         new Promise((resolve, reject) => {
//           setTimeout(() => {
//             /* resolve('some id needed because we change the return type to string when implementing BookService tests'); */
//           }, 1000);
//         }),
//       );

//       applicationService.createApplicant('').then(() => {
//         setTimeout(() => {
//           expect(spy).toHaveBeenCalledTimes(1);
//         /*   expect(spy).toHaveBeenCalledWith('jorgealva'); */
//           done();
//         }, 50);
//       });

//       const spy = spyOn(component.created, 'emit');

//       /* fixture.componentInstance.collectionName.setValue('carasui'); */
//       /* fixture.componentInstance.applicantForm.controls.name = 'jorgealva'; */
//       fixture.detectChanges();

//       const compiledHtml = fixture.nativeElement as HTMLElement;
//       const button = compiledHtml.querySelector('[data-test="button-create"]') as HTMLButtonElement;
//       console.log(button);
//       button.click();
//     });
//   });

});
