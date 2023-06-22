import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent, MasterService, ValueService } from './demo.component';

export class FakeValueService extends ValueService {
  override value = 'faked service value';
}

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// Straight Jasmine testing without Angular's testing support
describe('demo without testbad', ()=>{
describe('ValueService', () => {
  let service: ValueService;
  beforeEach(() => { service = new ValueService(); });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });
});

describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;

  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('#getValue should return faked value from a fakeService', () => {
    masterService = new MasterService(new FakeValueService());
    expect(masterService.getValue()).toBe('faked service value');
  });

});
});


describe('demo (with TestBed):', () => {

  ////////  Service Tests  /////////////

  describe('ValueService', () => {

    let service: ValueService;

    beforeEach(() => {
      TestBed.configureTestingModule({ providers: [ValueService] });
      service = TestBed.inject(ValueService);
    });

    it('should use ValueService', () => {
      service = TestBed.inject(ValueService);
      expect(service.getValue()).toBe('real value');
    });


  });

  describe('MasterService', () => {
    let masterService: MasterService;
    let valueServiceSpy: jasmine.SpyObj<ValueService>;

    beforeEach(() => {
      const spy = jasmine.createSpyObj('ValueService', ['getValue']);

      TestBed.configureTestingModule({
        // Provide both the service-to-test and its (spy) dependency
        providers: [
          MasterService,
          { provide: ValueService, useValue: spy }
        ]
      });
      // Inject both the service-to-test and its (spy) dependency
      masterService = TestBed.inject(MasterService);
      valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
    });

    it('#getValue should return stubbed value from a spy', () => {
      const stubValue = 'stub value';
      valueServiceSpy.getValue.and.returnValue(stubValue);

      expect(masterService.getValue())
        .withContext('service returned stub value')
        .toBe(stubValue);
      expect(valueServiceSpy.getValue.calls.count())
        .withContext('spy method was called once')
        .toBe(1);
      expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
        .toBe(stubValue);
    });
  });
  describe('MasterService without beforeEach',()=>{
    function setup() {
      const valueServiceSpy =
        jasmine.createSpyObj('ValueService', ['getValue']);
      const stubValue = 'stub value';
      const masterService = new MasterService(valueServiceSpy);
    
      valueServiceSpy.getValue.and.returnValue(stubValue);
      return { masterService, stubValue, valueServiceSpy };
    };
    it('#getValue should return stubbed value from a spy', () => {
      const { masterService, stubValue, valueServiceSpy } = setup();
      expect(masterService.getValue())
        .withContext('service returned stub value')
        .toBe(stubValue);
      expect(valueServiceSpy.getValue.calls.count())
        .withContext('spy method was called once')
        .toBe(1);
      expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
        .toBe(stubValue);
    });
  });
});