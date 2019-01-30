import { ShareMaterialModule } from './share-material.module';

describe('ShareMaterialModule', () => {
  let shareMaterialModule: ShareMaterialModule;

  beforeEach(() => {
    shareMaterialModule = new ShareMaterialModule();
  });

  it('should create an instance', () => {
    expect(shareMaterialModule).toBeTruthy();
  });
});
