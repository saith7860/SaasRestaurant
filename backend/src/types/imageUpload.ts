export interface ImageValidationRules {
  label: string;
  minWidth: number;
  minHeight: number;
  aspectRatio?: number;
  tolerance?: number;
}

export interface UploadImageOptions {
  file: Express.Multer.File | undefined;
  folder: string;
  width?: number;
  height?: number;
  validation?: ImageValidationRules;
}