import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantFormComponent } from './applicant-form.component';
import { ApplicationsService } from '../../services/applications.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Suite of tests on applicant-form.component (applicantForm)', () => {
  let component: ApplicantFormComponent;
  let fixture: ComponentFixture<ApplicantFormComponent>;
  let applicationService: jasmine.SpyObj<ApplicationsService>;

  beforeEach(async () => {
    const applicationServiceMock = jasmine.createSpyObj('ApplicationsService', [
      'createApplicant',
    ]);

    await TestBed.configureTestingModule({
      imports: [ApplicantFormComponent, NoopAnimationsModule],
      providers: [
        {
          provide: ApplicationsService,
          useValue: applicationServiceMock,
        },
      ],
    }).compileComponents();

    applicationService = TestBed.inject(
      ApplicationsService
    ) as jasmine.SpyObj<ApplicationsService>;
    fixture = TestBed.createComponent(ApplicantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('inputs:', () => {
    describe('Given input "name"', () => {
      it('The input box must show a given name', () => {
        component.applicantForm.controls.name.setValue('Cunchis Doe');
        const compiledHtml = fixture.nativeElement as HTMLElement;
        const inputBox = compiledHtml.querySelector(
          '[data-test="field-name"]'
        ) as HTMLInputElement;
        expect(inputBox.value).toBe('Cunchis Doe');
      });
    });
  });
  });

