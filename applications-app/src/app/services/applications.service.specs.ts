import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { instanceToPlain, plainToClassFromExist } from 'class-transformer';
import { ApplicationsService } from './applications.service';
import { ApplicantModel } from '../models/applicant.model';
import { Status } from '../constants/application-status.constant';

describe('ApplicationsService', () => {
  let service: ApplicationsService;
  const httpClientMock = jasmine.createSpyObj('HttpClient', [
    'post',
    'delete',
    'get',
  ]);
  let httpService: jasmine.SpyObj<HttpClient>;
  const apiUrl = environment.applicantsApiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
      ],
    });
    httpService = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    service = TestBed.inject(ApplicationsService);
  });

  afterEach(() => {
    httpService.post.calls.reset();
    httpService.get.calls.reset();
    httpService.delete.calls.reset();
  });

  describe('applicantHTTPRequesting', () => {
    it('should make the HTTP request with the new applicant sent as parameter', (done: DoneFn) => {


      const applicant: ApplicantModel = new ApplicantModel(
        'Jorge',
        'jrgmad@hotmail.com',
        44,
        2,
        'programador',
        '2024-10-14T22:00:00.000Z',
        Status.Approved
      );

      httpService.post.and.returnValue(of('post SUCCESS'));

      const serializedVersion = instanceToPlain(applicant, {
        excludePrefixes: ['_'],
      });

      service.applicantHTTPRequesting(applicant, 'create-applicant')
        .then(() => {
          expect(httpService.post).toHaveBeenCalledTimes(1);
          expect(httpService.post).toHaveBeenCalledWith(
            'http://localhost:3000/applications',
            serializedVersion
          );
          done();
        })
        .catch((error) => {
          fail(`Test failed with error: ${error}`);
          done();
        });
    });
  });
});
