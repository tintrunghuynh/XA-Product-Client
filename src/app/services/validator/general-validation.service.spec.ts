import { TestBed } from "@angular/core/testing";

import { GeneralValidationService } from "./general-validation.service";

describe("GeneralValidationService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GeneralValidationService = TestBed.get(GeneralValidationService);
    expect(service).toBeTruthy();
  });
});
